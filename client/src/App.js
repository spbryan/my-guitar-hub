import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container';
// import logo from "./logo.svg";
import Navigation from "./components/Navigation";
import LoginScreen from "./pages/LoginScreen";
import Home from "./pages/Home";
import Gear from "./pages/Gear";
import Playlist from "./pages/Playlist";
import Practice from "./pages/Practice";
import Reference from "./pages/Reference";
import Theory from "./pages/Theory";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Container id="body">
            <Route exact path="/loginscreen" component={LoginScreen} />
            <Route exact path="/" render={() => <Home />} />
            <Route exact path="/gear" render={() => <Gear />} />
            <Route exact path="/playlist" render={() => <Playlist />} />
            <Route exact path="/practice" render={() => <Practice />} />
            <Route exact path="/reference" render={() => <Reference />} />
            <Route exact path="/theory" render={() => <Theory />} />
            {/* <Route exact path="/home" render={() => <Home updateWhichNav={this.updateWhichNav} />} />
              <Route exact path="/loginscreen" component={LoginScreen} />
              <Route exact path="/admin" render={() => <Admin updateWhichNav={this.updateWhichNav} />} />
              <Route exact path="/report" render={() => <Report updateWhichNav={this.updateWhichNav} />} />
              <Route component={NoMatch} /> */}
          </Container>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
