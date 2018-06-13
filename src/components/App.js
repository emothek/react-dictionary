import React, { Component } from 'react';
import Layout from './layout/Layout'
import Search from './search/Search'

class App extends Component {

  render() {
    return (
        <Layout>
            <Search />
        </Layout>
    )
  }

}

export default App
