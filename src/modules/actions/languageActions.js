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

export function languageChangeSuccess(langJson) {
  return {
    type: LANGUAGE_OPTIONS.LANGUAGE_CHANGE_SUCCESS,
    langJson: langJson
  }
}

export function languageChange(newLang) {
  return dispatch => {
    dispatch(languageIsLoading(true))
    
    switch (newLang) {
      case 'en':
        dispatch(languageChangeSuccess(English))
        return
      case 'es':
        dispatch(languageChangeSuccess(Spanish))
        return
      default:
        dispatch(languageChangeSuccess(Spanish))
    }
    dispatch(languageIsLoading(false))
  }
}
