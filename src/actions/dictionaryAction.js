import ActionConstants from '../constants/ActionConstants'

export const findWordSynonyms = (word) => {
    console.log('search for ', word)
    return(dispatch) => {
        let results = null // call api here
        dispatch({
          type: ActionConstants.SEARCH_RESULTS_LOADED, 
          payload: results
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