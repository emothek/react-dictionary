import React, {Component} from 'react'
import {Row, Col, Jumbotron, InputGroup, Input, Button} from 'reactstrap'

class SearchBar extends Component {

    _onSearchTextChange(e) {
    
    }

    _searchWordSynonyms() {
        console.log('search!')
    }

    render() {
        return(
            <Row>   
                <Col md={{size: 10, offset: 1}} lg={{size: 8, offset: 2}}>
                    <Jumbotron>
                        <h4>Search Synonyms</h4>
                        <InputGroup>
                            <Input placeholder={'Type word...'} className={'search-bar'} onChange={this._onSearchTextChange} />
                            <Button color={'warning'} className={'search-btn'} onClick={this._searchWordSynonyms}>
                                Search
                            </Button>
                        </InputGroup>
                    </Jumbotron>
                </Col>
            </Row>
        )
    }

}

export default SearchBar