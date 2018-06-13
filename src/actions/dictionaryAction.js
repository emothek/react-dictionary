import ActionConstants from '../constants/ActionConstants'
import * as dictionaryApi from '../apis/dictionaryApi'

export const findWordSynonyms = (word) => {
    console.log('search for ', word)
    return(dispatch) => {
        //get from localstorage when its a persistent data
        if(localStorage.getItem(word)) {
          console.log('get from localstorage!!', word)
          dispatch({
              type: ActionConstants.SEARCH_RESULTS_LOADED, 
              payload: JSON.parse(localStorage.getItem(word))
          })
        } 
        //call API when data is not in localstorage
        else {
          console.log('call api!!', word)
          dictionaryApi.getWordSynonyms(word).then((response)=>{
              localStorage.setItem(word, JSON.stringify(response.data.results))
              dispatch({
                type: ActionConstants.SEARCH_RESULTS_LOADED, 
                payload: response.data.results
              })
          })
        }
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