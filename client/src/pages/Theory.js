import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Theory.css';

class Theory extends Component {
    render() {
        return (
            <div>
                <Container id="container">
                    <Row>
                        <Col size="md-12">
                            <h1>Theory</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Theory;