import React, {Component} from 'react'
import {Row, Col, Card, CardBody, CardTitle} from 'reactstrap'
import Entries from './Entries'

class Result extends Component {

    render() {
        let result = this.props.data[0]
        return(
            <Row>
                <Col md={{size: 10, offset: 1}} lg={{size: 8, offset: 2}}>
                    <Card>
                        <CardBody>
                            <CardTitle className={'keyword-text'}>
                                { result.word }
                            </CardTitle>
                            <hr/>
                            { result.lexicalEntries.length > 0 &&
                                result.lexicalEntries.map((entry, index)=>
                                    <Entries key={index} data={entry}/>
                                )
                            }
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }

}

export default Result