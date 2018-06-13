import ActionConstants from '../constants/ActionConstants'

export default (state = null, action) => {
    switch(action.type) {
        case ActionConstants.SEARCH_KEYWORD_UPDATED:
            return action.payload
        default:
            break
    }
    return state
}