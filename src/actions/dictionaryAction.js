import ActionConstants from '../constants/ActionConstants'
import * as dictionaryApi from '../apis/dictionaryApi'

export const findWordSynonyms = (word) => {
    console.log('search for ', word)
    return(dispatch) => {
        dictionaryApi.getWordSynonyms(word).then((response)=>{
          dispatch({type: ActionConstants.SEARCH_RESULTS_LOADED, payload: response.data.results})
        })
    }
}

export const updateSearchKeyword = (word) => {
    return(dispatch) => {
      dispatch({
        type: ActionConstants.SEARCH_KEYWORD_UPDATED,
        payload: word
      })
    }
}