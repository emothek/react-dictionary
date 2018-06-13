import React, { Component } from 'react';
import Layout from './layout/Layout'
import SearchBar from './search/SearchBar'
import Result from './search/Result'

class App extends Component {

  render() {
    return (
        <Layout>
            <SearchBar />
            <Result />
        </Layout>
    )
  }

}

export default App;
