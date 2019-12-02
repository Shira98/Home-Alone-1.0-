import React, { PropTypes, Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import { Box, Button as GrommetButton, Grommet } from 'grommet';
import './components/Pro.css';
//import firebase from 'firebase';
import './App.css';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import LeftNav from './components/LeftNav';
import Situations from './components/Situations';
import Settings from './components/Settings';
import About from './components/About';
import Profile from './components/Profile';
import Current from './components/CurrentLoc';



class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: localStorage.getItem('username') ,
            mail: localStorage.getItem('mail'),
            number: localStorage.getItem('number'),
            img_url: require('./3.png')
           // trscpt: localStorage.getItem('always')
        };

        this.onChangeUserDetails = this.onChangeUserDetails.bind(this);
        this.onLogin = this.onLogin.bind(this);

        //firebase.database = firebase.app.database
    }

   
    onChangeUserDetails(username, mail) {
        localStorage.setItem('mail', mail);
        localStorage.setItem('username', username);
     }

    onLogin(num) {
   
        localStorage.setItem('number',num);
    }
    
    render() {
       
      return (
        <BrowserRouter>
              <div >
                  <Route exact={true} path='/dashboard' render={() => (
                      <div className="App" >
                          <LeftNav user={this.state} />
                          <Dashboard />
                          <Current />
                      </div>

                  )} />

                  <Route exact={true} path='/profile' render={() => (
                      <div className="App">
                          <LeftNav user={this.state} pageWrapId={"page-wrap"} outerContainerId={"App"} />
                          <div id="page-wrap">

                              <Profile user={this.state} change={this.onChangeUserDetails} />
                          </div>

                      </div>
                  )} />

                  <Route exact={true} path='/' render={() => (
                      <div className="App">
                          <SignUp change={this.onLogin} />
                      </div>
                  )} />

                  <Route exact={true} path='/about' render={() => (
                      <div className="App">
                          <LeftNav user={this.state} pageWrapId={"page-wrap"} outerContainerId={"App"} />
                          <div id="page-wrap">
                              <About />
                          </div>
                      </div>
                  )} />

                  <Route exact={true} path='/situations' render={() => (
                      <div className="App profile">
                          <LeftNav user={this.state} pageWrapId={"page-wrap"} outerContainerId={"App"} />
                          <div id="page-wrap">
                          <br/>
                              <Situations />
                          </div>
                      </div>
                  )} />
                  <Route exact={true} path='/settings' render={() => (
                      <div className="App">
                          <LeftNav user={this.state} pageWrapId={"page-wrap"} outerContainerId={"App"} />
                          <div id="page-wrap">
                              <Settings />
                          </div>
                      </div>
                  )} />

        </div>
        </BrowserRouter>
    );
  }
}


export default  App

