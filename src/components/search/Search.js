import React, {Component} from 'react'
import SearchBar from './SearchBar'
import Result from './Result'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {findWordSynonyms, updateSearchKeyword} from '../../actions/dictionaryAction'
class Search extends Component {
    
    constructor() {
        super()
        this._onSearchKeywordUpdate = this._onSearchKeywordUpdate.bind(this)
        this._handleSearchWordSynonyms = this._handleSearchWordSynonyms.bind(this)
    }

    _onSearchKeywordUpdate = (e) => {
        this.props.updateSearchKeyword(e.target.value)
    }

    _handleSearchWordSynonyms = () => {
        this.props.findWordSynonyms(this.props.keyword)
    }

    render() {
        return(
            <div>
                <SearchBar search={this._handleSearchWordSynonyms}  updateKeyword={this._onSearchKeywordUpdate} />
                {this.props.results &&
                    <Result data={this.props.results}/>
                }
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
        findWordSynonyms: findWordSynonyms
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)