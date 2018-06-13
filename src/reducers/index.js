import {combineReducers} from 'redux'
import resultsReducer from './resultsReducer'
import keywordReducer from './keywordReducer'

const reducers = combineReducers({
    keyword: keywordReducer,
    results: resultsReducer
})

export default reducers