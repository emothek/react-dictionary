import React, {Component} from 'react'
import SearchBar from './SearchBar'
import ResultMessage from './ResultMessage'
import Result from './Result'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {findWordSynonyms, updateSearchKeyword, loadingResults} from '../../actions/dictionaryAction'

class Search extends Component {
    
    constructor() {
        super()
        this.state = {
            searchKeyword: ''
        }
        this._onSearchKeywordUpdate = this._onSearchKeywordUpdate.bind(this)
        this._handleSearchWordSynonyms = this._handleSearchWordSynonyms.bind(this)
    }

    _onSearchKeywordUpdate = (e) => {
        this.props.updateSearchKeyword(e.target.value)
    }

    _handleSearchWordSynonyms = () => {
        this.props.loadingResults();
        this.setState({searchKeyword: this.props.keyword})
        this.props.findWordSynonyms(this.props.keyword)
    }

    _renderResults = () => {
        if(this.props.results === false ) {
            return <ResultMessage message={'Loading results please wait...'}/>
        } 
        else if(this.props.results === null) {
            return <ResultMessage message={'Please type in a word to show synonyms.'}/>
        }
        else if (this.props.results === "404 Not Found") {
            return <ResultMessage message={'Sorry but there is no synonym found for the word: ' + this.state.searchKeyword}/>
        }
        else {
            return <Result data={this.props.results} />
        }
    }

    render() {
        return(
            <div>
                <SearchBar search={this._handleSearchWordSynonyms}  updateKeyword={this._onSearchKeywordUpdate} />
                { this._renderResults() }
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        keyword: state.keyword,
        results: state.results
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateSearchKeyword: updateSearchKeyword,
        findWordSynonyms: findWordSynonyms,
        loadingResults: loadingResults
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)