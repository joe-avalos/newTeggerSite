import {LANGUAGE_OPTIONS} from '../actions/languageActions'
import Spanish from '../../components/data/translations/locales/es/translations'

const defaultState = {
  isLoading: false,
  hasErrored: '',
  lang: 'ES',
  langJson: Spanish
}

export function languageReduce(state = defaultState, action) {
  switch (action.type) {
    case LANGUAGE_OPTIONS.LANGUAGE_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }
    case LANGUAGE_OPTIONS.LANGUAGE_HAS_ERRORED:
      return {
        ...state,
        hasErrored: action.hasErrored
      }
    case LANGUAGE_OPTIONS.LANGUAGE_CHANGE_SUCCESS:
      return {
        ...state,
        lang: action.lang,
        langJson: action.langJson
      }
    default:
      return state
  }
}
