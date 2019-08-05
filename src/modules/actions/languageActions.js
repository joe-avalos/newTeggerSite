import English from '../../components/data/translations/locales/en/translations'
import Spanish from '../../components/data/translations/locales/es/translations'

export const LANGUAGE_OPTIONS = {
  LANGUAGE_IS_LOADING: 'LANGUAGE_IS_LOADING',
  LANGUAGE_HAS_ERRORED: 'LANGUAGE_HAS_ERRORED',
  LANGUAGE_CHANGE_SUCCESS: 'LANGUAGE_CHANGE_SUCCESS'
}

export function languageIsLoading(bool) {
  return {
    type: LANGUAGE_OPTIONS.LANGUAGE_IS_LOADING,
    isLoading: bool
  }
}

export function langauageHasErrored(error) {
  return {
    type: LANGUAGE_OPTIONS.LANGUAGE_HAS_ERRORED,
    hasErrored: error
  }
}

export function languageChangeSuccess(lang, langJson) {
  return {
    type: LANGUAGE_OPTIONS.LANGUAGE_CHANGE_SUCCESS,
    lang: lang,
    langJson: langJson
  }
}

export function languageChange(newLang) {
  return dispatch => {
    dispatch(languageIsLoading(true))
    
    switch (newLang) {
      case 'EN':
        dispatch(languageChangeSuccess('EN', English))
        return
      case 'ES':
        dispatch(languageChangeSuccess('ES', Spanish))
        return
      default:
        dispatch(languageChangeSuccess('ES', Spanish))
    }
    dispatch(languageIsLoading(false))
  }
}
