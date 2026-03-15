import { NextRequest, NextResponse } from 'next/server'

class MarkovChainAnalyzer {
  private sequence: number[]
  private states: number[]

  constructor(sequence: number[]) {
    this.sequence = sequence
    this.states = [1, 2, 3, 4]
  }

  private getCombinations(arr: number[], size: number): number[][] {
    const result: number[][] = []

    function generate(current: number[]) {
      if (current.length === size) {
        result.push([...current])
        return
      }
      for (const item of arr) {
        current.push(item)
        generate(current)
        current.pop()
      }
    }

    generate([])
    return result
  }

  private calculateTransitionMatrix(order: number): { matrix: number[][], counts: number[][], states: number[][] } {
    const possibleStates = this.getCombinations(this.states, order)

    const stateToIdx = new Map<string, number>()
    possibleStates.forEach((state, i) => stateToIdx.set(JSON.stringify(state), i))

    const matrix: number[][] = Array(possibleStates.length).fill(null).map(() => Array(4).fill(0))
    const counts: number[][] = Array(possibleStates.length).fill(null).map(() => Array(4).fill(0))

    for (let i = 0; i < this.sequence.length - order; i++) {
      const currentState = this.sequence.slice(i, i + order)
      const nextState = this.sequence[i + order]

      const stateKey = JSON.stringify(currentState)
      if (stateToIdx.has(stateKey)) {
        const rowIdx = stateToIdx.get(stateKey)!
        const colIdx = nextState - 1
        counts[rowIdx][colIdx]++
      }
    }

    for (let i = 0; i < possibleStates.length; i++) {
      const rowSum = counts[i].reduce((a, b) => a + b, 0)
      if (rowSum > 0) {
        matrix[i] = counts[i].map(c => c / rowSum)
      }
    }

    return { matrix, counts, states: possibleStates }
  }

  predictNextProbabilities(currentState: number[], order: number): Map<number, number> {
    const { matrix, states } = this.calculateTransitionMatrix(order)
    const result = new Map<number, number>()

    if (currentState.length === order && matrix.length > 0) {
      const stateKey = JSON.stringify(currentState)
      const stateIdx = states.findIndex(s => JSON.stringify(s) === stateKey)

      if (stateIdx >= 0) {
        const probs = matrix[stateIdx]
        this.states.forEach((s, i) => result.set(s, probs[i]))
        return result
      }
    }

    // Default equal probabilities
    this.states.forEach(s => result.set(s, 0.25))
    return result
  }
}

class DataProcessor {
  input_data: number[] = []
  pairs: [number, number][] = []
  mapped_sequence: number[] = []

  addNumber(num: number): void {
    this.input_data.push(num)
    this.processData()
  }

  private processData(): void {
    this.pairs = []
    this.mapped_sequence = []

    if (this.input_data.length >= 8) {
      for (let i = 1; i < this.input_data.length - 6; i++) {
        const firstIdx = i - 1
        const secondIdx = i + 6

        if (secondIdx < this.input_data.length) {
          this.pairs.push([this.input_data[firstIdx], this.input_data[secondIdx]])
        }
      }

      // Mapping pairs to numbers
      const mapping: Record<string, number> = {
        '1,1': 1,
        '1,2': 2,
        '2,1': 3,
        '2,2': 4
      }

      for (const pair of this.pairs) {
        const key = `${pair[0]},${pair[1]}`
        const mapped = mapping[key]
        if (mapped) {
          this.mapped_sequence.push(mapped)
        }
      }
    }
  }

  getMappedSequence(): number[] {
    return this.mapped_sequence
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { numbers } = body

    if (!Array.isArray(numbers) || numbers.length === 0) {
      return NextResponse.json({ error: 'Numbers array is required' }, { status: 400 })
    }

    // Validate numbers
    for (const num of numbers) {
      if (typeof num !== 'number' || (num !== 1 && num !== 2)) {
        return NextResponse.json({ error: 'Numbers must be 1 or 2' }, { status: 400 })
      }
    }

    // Check minimum numbers
    if (numbers.length < 8) {
      return NextResponse.json({
        error: `Нужно минимум 8 чисел (осталось ${8 - numbers.length})`,
        needMinNumbers: true
      }, { status: 400 })
    }

    // Process data
    const processor = new DataProcessor()
    for (const num of numbers) {
      processor.addNumber(num)
    }

    const mappedSeq = processor.getMappedSequence()

    if (mappedSeq.length < 2) {
      return NextResponse.json({
        error: 'Недостаточно данных для прогноза',
        needMinNumbers: true
      }, { status: 400 })
    }

    // Create analyzer
    const analyzer = new MarkovChainAnalyzer(mappedSeq)
    const sequence = [...mappedSeq]
    const fullPredictions: number[] = []

    // Generate 10 predictions
    for (let step = 0; step < 10; step++) {
      const stepProbs: Map<number, number>[] = []

      for (const order of [1, 2, 3]) {
        if (sequence.length >= order) {
          const currentState = sequence.slice(-order)
          const probs = analyzer.predictNextProbabilities(currentState, order)
          stepProbs.push(probs)
        }
      }

      // Combine probabilities
      const combinedProbs = new Map<number, number>()
      for (const probs of stepProbs) {
        for (const [state, prob] of probs) {
          combinedProbs.set(state, (combinedProbs.get(state) || 0) + prob / stepProbs.length)
        }
      }

      // Find max probability
      let maxState = 1
      let maxProb = 0
      for (const [state, prob] of combinedProbs) {
        if (prob > maxProb) {
          maxProb = prob
          maxState = state
        }
      }

      fullPredictions.push(maxState)
      sequence.push(maxState)
    }

    // Convert to user predictions (1 or 2)
    const userPredictions = fullPredictions.map(num => {
      return (num === 1 || num === 3) ? 1 : 2
    })

    const result = userPredictions.map((num, index) => ({
      number: num,
      position: index + 1
    }))

    return NextResponse.json({ predictions: result })

  } catch (error) {
    console.error('Prediction error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
