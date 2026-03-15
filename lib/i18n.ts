export type Language = 'ru' | 'tr' | 'en' | 'id' | 'es' | 'ms' | 'ko'

export const LANGUAGE_NAMES: Record<Language, string> = {
  ru: 'Русский',
  tr: 'Türkçe',
  en: 'English',
  id: 'Bahasa Indonesia',
  es: 'Español',
  ms: 'Bahasa Melayu',
  ko: '한국어'
}

export const LANGUAGE_FLAGS: Record<Language, string> = {
  ru: '🇷🇺',
  tr: '🇹🇷',
  en: '🇬🇧',
  id: '🇮🇩',
  es: '🇪🇸',
  ms: '🇲🇾',
  ko: '🇰🇷'
}

export type TranslationKey =
  | 'title'
  | 'selectLanguage'
  | 'ready'
  | 'addedNumber'
  | 'deletedNumber'
  | 'baseCleared'
  | 'needMinNumbers'
  | 'predicting'
  | 'predictionComplete'
  | 'predictionError'
  | 'numbersInBase'
  | 'minRequired'
  | 'quickButtons'
  | 'delete'
  | 'predict'
  | 'clear'
  | 'lastNumbers'
  | 'noNumbers'
  | 'currentBase'
  | 'noNumbersHint'
  | 'prediction'

export const translations: Record<Language, Record<TranslationKey, string>> = {
  ru: {
    title: 'JUPITER',
    selectLanguage: 'Выберите язык',
    ready: '✅ Готов к работе',
    addedNumber: '✅ Число добавлено',
    deletedNumber: '🗑 Удалено последнее',
    baseCleared: '✅ База очищена',
    needMinNumbers: '⚠️ Нужно минимум 8 чисел',
    predicting: '🔄 Прогнозирование...',
    predictionComplete: '✅ Прогноз готов',
    predictionError: '❌ Ошибка прогноза',
    numbersInBase: 'Чисел в базе:',
    minRequired: 'мин. 8',
    quickButtons: '⚡ БЫСТРЫЙ ВВОД',
    delete: 'Удалить',
    predict: 'Прогноз',
    clear: 'Очистить',
    lastNumbers: '📜 Последние 20 чисел',
    noNumbers: 'Нет чисел',
    currentBase: '📋 ТЕКУЩАЯ БАЗА ЧИСЕЛ',
    noNumbersHint: 'Нет чисел. Нажмите кнопки 1 или 2.',
    prediction: '🔮 ПРОГНОЗ (числа 1 и 2)',
  },
  tr: {
    title: 'JUPITER',
    selectLanguage: 'Dil seçin',
    ready: '✅ Hazır',
    addedNumber: '✅ Sayı eklendi',
    deletedNumber: '🗑 Silindi',
    baseCleared: '✅ Temizlendi',
    needMinNumbers: '⚠️ En az 8 sayı gerekli',
    predicting: '🔄 Tahmin yapılıyor...',
    predictionComplete: '✅ Tahmin hazır',
    predictionError: '❌ Tahmin hatası',
    numbersInBase: 'Sayı sayısı:',
    minRequired: 'min. 8',
    quickButtons: '⚡ HIZLI GİRİŞ',
    delete: 'Sil',
    predict: 'Tahmin',
    clear: 'Temizle',
    lastNumbers: '📜 Son 20 sayı',
    noNumbers: 'Sayı yok',
    currentBase: '📋 MEVCUT VERİ TABANI',
    noNumbersHint: 'Sayı yok. 1 veya 2 tuşlarına basın.',
    prediction: '🔮 TAHMİN (sayılar 1 ve 2)',
  },
  en: {
    title: 'JUPITER',
    selectLanguage: 'Select language',
    ready: '✅ Ready',
    addedNumber: '✅ Number added',
    deletedNumber: '🗑 Deleted',
    baseCleared: '✅ Cleared',
    needMinNumbers: '⚠️ Need at least 8 numbers',
    predicting: '🔄 Predicting...',
    predictionComplete: '✅ Prediction ready',
    predictionError: '❌ Prediction error',
    numbersInBase: 'Numbers in base:',
    minRequired: 'min. 8',
    quickButtons: '⚡ QUICK INPUT',
    delete: 'Delete',
    predict: 'Predict',
    clear: 'Clear',
    lastNumbers: '📜 Last 20 numbers',
    noNumbers: 'No numbers',
    currentBase: '📋 CURRENT DATABASE',
    noNumbersHint: 'No numbers. Press 1 or 2 buttons.',
    prediction: '🔮 PREDICTION (numbers 1 and 2)',
  },
  id: {
    title: 'JUPITER',
    selectLanguage: 'Pilih bahasa',
    ready: '✅ Siap',
    addedNumber: '✅ Nomor ditambahkan',
    deletedNumber: '🗑 Dihapus',
    baseCleared: '✅ Dibersihkan',
    needMinNumbers: '⚠️ Butuh minimal 8 angka',
    predicting: '🔄 Memprediksi...',
    predictionComplete: '✅ Prediksi siap',
    predictionError: '❌ Kesalahan prediksi',
    numbersInBase: 'Jumlah angka:',
    minRequired: 'min. 8',
    quickButtons: '⚡ INPUT CEPAT',
    delete: 'Hapus',
    predict: 'Prediksi',
    clear: 'Bersihkan',
    lastNumbers: '📜 20 angka terakhir',
    noNumbers: 'Tidak ada angka',
    currentBase: '📋 DATABASE SAAT INI',
    noNumbersHint: 'Tidak ada angka. Tekan tombol 1 atau 2.',
    prediction: '🔮 PREDIKSI (angka 1 dan 2)',
  },
  es: {
    title: 'JUPITER',
    selectLanguage: 'Seleccionar idioma',
    ready: '✅ Listo',
    addedNumber: '✅ Número añadido',
    deletedNumber: '🗑 Eliminado',
    baseCleared: '✅ Limpiado',
    needMinNumbers: '⚠️ Se necesitan al menos 8 números',
    predicting: '🔄 Prediciendo...',
    predictionComplete: '✅ Predicción lista',
    predictionError: '❌ Error de predicción',
    numbersInBase: 'Números en base:',
    minRequired: 'mín. 8',
    quickButtons: '⚡ ENTRADA RÁPIDA',
    delete: 'Eliminar',
    predict: 'Predecir',
    clear: 'Limpiar',
    lastNumbers: '📜 Últimos 20 números',
    noNumbers: 'Sin números',
    currentBase: '📋 BASE DE DATOS ACTUAL',
    noNumbersHint: 'Sin números. Presiona los botones 1 o 2.',
    prediction: '🔮 PREDICCIÓN (números 1 y 2)',
  },
  ms: {
    title: 'JUPITER',
    selectLanguage: 'Pilih bahasa',
    ready: '✅ Sedia',
    addedNumber: '✅ Nombor ditambah',
    deletedNumber: '🗑 Dihapus',
    baseCleared: '✅ Dibersihkan',
    needMinNumbers: '⚠️ Perlu sekurang-kurangnya 8 nombor',
    predicting: '🔄 Meramal...',
    predictionComplete: '✅ Ramalan siap',
    predictionError: '❌ Ralat ramalan',
    numbersInBase: 'Nombor dalam pangkalan:',
    minRequired: 'min. 8',
    quickButtons: '⚡ INPUT PANTAS',
    delete: 'Hapus',
    predict: 'Ramal',
    clear: 'Bersihkan',
    lastNumbers: '📜 20 nombor terakhir',
    noNumbers: 'Tiada nombor',
    currentBase: '📋 PANGKALAN DATA SEMASA',
    noNumbersHint: 'Tiada nombor. Tekan butang 1 atau 2.',
    prediction: '🔮 RAMALAN (nombor 1 dan 2)',
  },
  ko: {
    title: 'JUPITER',
    selectLanguage: '언어 선택',
    ready: '✅ 준비됨',
    addedNumber: '✅ 숫자 추가됨',
    deletedNumber: '🗑 삭제됨',
    baseCleared: '✅ 초기화됨',
    needMinNumbers: '⚠️ 최소 8개의 숫자 필요',
    predicting: '🔄 예측 중...',
    predictionComplete: '✅ 예측 완료',
    predictionError: '❌ 예측 오류',
    numbersInBase: '저장된 숫자:',
    minRequired: '최소 8개',
    quickButtons: '⚡ 빠른 입력',
    delete: '삭제',
    predict: '예측',
    clear: '초기화',
    lastNumbers: '📜 최근 20개 숫자',
    noNumbers: '숫자 없음',
    currentBase: '📋 현재 데이터베이스',
    noNumbersHint: '숫자 없음. 1 또는 2 버튼을 누르세요.',
    prediction: '🔮 예측 (숫자 1과 2)',
  }
}
