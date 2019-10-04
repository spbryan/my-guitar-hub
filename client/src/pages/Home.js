import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
// import con from "../utils/const";
import './Home.css';

class Home extends Component {
    // state = {
    //     date: new Date(),
    //     teams: [],
    //     redirect: false,
    //     teamChosen: null,
    //     dropdownLabel: "Choose Team"
    // }
    // componentDidMount() {
    //     if (!sessionStorage.getItem("userID")) {
    //         console.log("MAIN: no user ID in session");
    //         this.props.updateWhichNav(con.NOUSER);
    //     } else if (sessionStorage.getItem("role") === 'SCRUM MASTER') {
    //         console.log("MAIN: returning nav admin from main");
    //         this.props.updateWhichNav(con.ADMIN);
    //     } else {
    //         console.log("MAIN: returning nav developer from main");
    //         this.props.updateWhichNav(con.DEVELOPER);
    //     }
    // }

    render() {
        return (
            <div>
                <Container id="container">
                    <Row>
                        <Col size="md-12">
                            <h1>Home Page</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;