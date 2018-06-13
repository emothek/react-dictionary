import ActionConstants from '../constants/ActionConstants'
import * as dictionaryApi from '../apis/dictionaryApi'

export const findWordSynonyms = (word) => {
    console.log('search for ', word)
    if(word == null || word === "") {
      return {
        type: ActionConstants.SEARCH_RESULTS_LOADED, 
        payload: null
      }
    } else {
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
              // return not found when there's no synonym
              if(response.data.results === '404 Not Found') {
                dispatch({
                  type: ActionConstants.SEARCH_RESULTS_LOADED, 
                  payload: "404 Not Found"
                })
              } 
              // return results when there's synoynm data
              else {
                localStorage.setItem(word, JSON.stringify(response.data.results))
                dispatch({
                  type: ActionConstants.SEARCH_RESULTS_LOADED, 
                  payload: response.data.results
                })
              }
          })
        }
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


export const loadingResults = () => {
  return(dispatch) => {
    dispatch({
      type: ActionConstants.SEARCH_RESULTS_LOADED,
      payload: false
    })
  }
}