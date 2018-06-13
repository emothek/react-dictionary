import axios from 'axios'
import AppConstants from '../constants/AppConstants'

export const getWordSynonyms = (word) => {
    return axios.get(AppConstants.API_BASE_URL + '/synonyms/' + word)
}