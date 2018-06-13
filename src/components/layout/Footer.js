import React, {Component} from 'react'
import {Container} from 'reactstrap'

class Footer extends Component {

    render() {
        return(
            <div className={'footer'}>
                <Container>
                    <span className={'text-muted'}>Cha Gonzales | Powered by Oxford Dictionary API</span>
                </Container>
            </div>
        )
    }

}

export default Footer