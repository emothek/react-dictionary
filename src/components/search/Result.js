import React, {Component} from 'react'
import {Row, Col, Card, CardBody, CardTitle, CardSubtitle} from 'reactstrap'
import Senses from './Senses'

class Result extends Component {

    render() {
        return(
            <Row>
                <Col md={{size: 10, offset: 1}} lg={{size: 8, offset: 2}}>
                    <Card>
                        <CardBody>
                            <CardTitle>
                                royal
                            </CardTitle>
                            <hr/>
                            <CardSubtitle className={'category-text'}>Noun</CardSubtitle>
                            <Senses />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }

}

export default Result