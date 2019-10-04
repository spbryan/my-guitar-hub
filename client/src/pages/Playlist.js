import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Playlist.css';

class Playlist extends Component {
    render() {
        return (
            <div>
                <Container id="container">
                    <Row>
                        <Col size="md-12">
                            <h1>Playlist</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Playlist;