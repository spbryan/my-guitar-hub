import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Practice.css';

class Practice extends Component {
    render() {
        return (
            <div>
                <Container id="container">
                    <Row>
                        <Col size="md-12">
                            <h1>Practice</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Practice;