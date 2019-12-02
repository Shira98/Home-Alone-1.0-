import React, { Component } from 'react';
import { scaleRotate as Menu } from 'react-burger-menu';
import prof from './fan.png';
import './Nav.css';
import bar from './cloud.png';
import firebase from 'firebase';

//export default props => {
export default class LeftNav extends Component {
    logOut() {
        alert('Logged out successfully!');
        firebase.signOut();

    }
    render() {


        return (
    
        <div className="menu">

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

            <Menu customCrossIcon={false} pageWrapId={"page-wrap"} outerContainerId={"App"} >
                    <div className="profile-set">
                        <a href="/dashboard"><div id="container3" title="Home"><img src={this.props.user.img_url} style={{
                            position: 'relative',
                            width: '70px',
                            height: '70px',
                            zIndex: '40',
                            backgroundColor: 'transparent',
    display: 'inline-block'}}/></div></a>
                    <br/>

                    <br />
                        <div id="paragraph">
                            <p>Username:  {this.props.user.username}</p>
                            <p>Ph. No.: {this.props.user.number} </p>
                            <p>E-mail address:  {this.props.user.mail}</p>
                    </div>
                </div>

                <a className="menu-item btn btn-primary" href="/profile">Edit Profile</a>
                <br/>
                <div id="line"></div>
                <a class="menu-item" href="/situations" style={{ textDecoration: 'none'}}><i class="fa fa-ravelry"></i> Intents</a>
                <a className="menu-item" href="/settings" style={{ textDecoration: 'none' }}><i class="fa fa-fw fa-microphone"></i> Voice Setup</a>

                <a className="menu-item" href="/" style={{ textDecoration: 'none' }} onClick={ () => this.logOut()}><i class="fa fa-fw fa-user"></i> Sign Out</a>
                <div id="line"></div>

                <br />
                
                <a className="menu-item" href="/about" style={{ textDecoration: 'none' }}><i class="fa fa-fw fa-users"></i> About Us</a>
            </Menu>
        </div>
        );
    }
};

