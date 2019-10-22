/********************************
  * App.js for My Guitar Hub
  * 
  * @author Sean Bryan
  * 
  * 2019-10-16
  ********************************/

import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from 'react-bootstrap/Container';
// import logo from "./logo.svg";
import Navigation from "./components/Navigation";
import NavLogin from "./components/NavLogin";
import SongForm from "./components/SongForm";
import LoginScreen from "./pages/LoginScreen";
import Home from "./pages/Home";
import Gear from "./pages/Gear";
import Playlist from "./pages/Playlist";
import Practice from "./pages/Practice";
import Reference from "./pages/Reference";
import Theory from "./pages/Theory";
import con from "./utils/const";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props)
    this.updateWhichNav = this.updateWhichNav.bind(this);

    // Set some state
    this.state = {
      whichNav: 1
    };
  }

  // pass this function to the components to tell app which nav bar to load
  updateWhichNav = navType => {
    console.log("in update which nav bjt");
    if (navType === con.LOGGED_OUT) {
      this.setState({
        whichNav: con.LOGGED_OUT,
      });
    }
    else {
      this.setState({
        whichNav: con.LOGGED_IN,
      });
    }
    console.log(this.state.whichNav);
  }

  switchOnLogin = () => {
    switch (this.state.whichNav) {
      default:
      case con.LOGGED_OUT:
        return <NavLogin />
      case con.LOGGED_IN:
        return <Navigation updateWhichNav={this.updateWhichNav}/>
      }
  }

  render() {
    return (
      <Router>
        <div>
          {this.switchOnLogin()}
          <Container id="body">
            <Route exact path="/loginscreen" component={LoginScreen} />
            <Route exact path="/" render={() => <Home updateWhichNav={this.updateWhichNav} />} />
            <Route exact path="/gear" render={() => <Gear updateWhichNav={this.updateWhichNav}/>} />
            <Route exact path="/playlist" render={() => <Playlist updateWhichNav={this.updateWhichNav}/>} />
            <Route exact path="/practice" render={() => <Practice updateWhichNav={this.updateWhichNav}/>} />
            <Route exact path="/reference" render={() => <Reference updateWhichNav={this.updateWhichNav}/>} />
            <Route exact path="/theory" render={() => <Theory updateWhichNav={this.updateWhichNav}/>} />
            <Route exact path="/songform" render={() => <SongForm updateWhichNav={this.updateWhichNav}/>} />
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
