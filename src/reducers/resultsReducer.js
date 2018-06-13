import ActionConstant from '../constants/ActionConstants'

export default (state = null, action) => {
    switch(action.type) {
        case ActionConstant.SEARCH_RESULTS_LOADED:
            console.log('results!! ', action.payload)
            return action.payload
        default:
            break
    }
    return state
}