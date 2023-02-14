import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';

/**
 * Translates text.
 *
 * @param key The i18n key.
 */
export async function getCurrentLocal() {
  const enKey = await AsyncStorage.getItem('en')
  if(enKey) return 'en'

  const vnKey = await AsyncStorage.getItem('vn')
  if(vnKey) return 'vn'

  return null
}

export function translate(key) {
  const { t } = useTranslation();

  return key ? t(key) : null
}

export async function checkLocalLanguageValue(enValue, vnValue) {
  const local = await getCurrentLocal()

  let localLanguage = enValue

  if(local === 'en') localLanguage = enValue

  if(local === 'vn') localLanguage = vnValue
  
  return localLanguage
}