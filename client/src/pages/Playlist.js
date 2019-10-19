/********************************
  * Page to inventory personal playlist
  * 
  * @author Sean Bryan
  * 
  * 2019-10-16
  ********************************/
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import SongForm from "../components/SongForm";
import con from "../utils/const";
import './Playlist.css';

class Playlist extends Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        if (!sessionStorage.getItem("userID")) {
            this.props.updateWhichNav(con.LOGGED_OUT);
        } else {
            this.props.updateWhichNav(con.LOGGED_IN);
        }
        // this.openForm = false;
    }

    state = {
        openForm: false,
    };

    handleOpenForm = event => {
        event.preventDefault();
        // console.log("<debug> session storage" + JSON.stringify(sessionStorage));
        this.setState({
            openForm: true,
        })
    };

    render() {
        if (this.state.openForm) {
            return (
                <div>
                    <SongForm />
                </div>
            );
        }
        else {
            return (
                <div>
                    <Container id="container">
                        <Row>
                            <Col align="center">
                                <h1>Playlist</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col align="center">
                                <Button
                                    type="button"
                                    className="new-btn ml-4"
                                    onClick={this.handleOpenForm}>Add New Song</Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }
    }
}

export default Playlist;