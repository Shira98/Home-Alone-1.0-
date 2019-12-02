import React, { Component } from 'react';
//Sign up with number.
import './SignUp.css';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';


export default class SignUp extends Component {

    constructor(props) {
        super(props);
        const config = {
            apiKey: "AIzaSyA-CZZtKe6lS-ruhOycO07IWe9DYkaKKvc",
            authDomain: "hci-lab.firebaseapp.com",
            databaseURL: "https://hci-lab.firebaseio.com",
            projectId: "hci-lab",
            storageBucket: "hci-lab.appspot.com",
            messagingSenderId: "42862473790"
        };
 
        firebase.initializeApp(config);
        firebase.auth().useDeviceLanguage();
        //this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        this.handleNumChange = this.handleNumChange.bind(this);
        this.state = {
            number: ''
        };
    }
    handleNumChange(n) {

        this.setState({ number: "+91" + n.target.value })
        
    }
    getOTP() {
         var m = /^\+91[1-9][0-9]{9}$/;
         if (m.test(this.state.number) == false) {
            alert('Please enter a 10 digit phone number of the form as shown in the example. Country code is added automatically.');
        }
        else {
            //window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
            window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in', {
                'size': 'invisible'


            });

            /* window.recaptchaVerifier.render().then(function (widgetId) {
                 window.recaptchaWidgetId = widgetId;
              });*/
            //this.props.change(this.state.number)
            firebase.auth().signInWithPhoneNumber(this.state.number, window.recaptchaVerifier).then(function (confirmationResult) {
                window.confirmationResult = confirmationResult;
                alert('Captcha successfully verified! OTP sent to the number.');
                var verificationCode = window.prompt('Please enter the verification ' + 'code that was sent to your mobile device.');

                window.confirmationResult.confirm(verificationCode).then(function (result) {
                    //this.props.change(this.state.number);
                    alert('Successfully verfied! Please click on the login button.');

                    document.getElementById('login').disabled = false;
                    document.getElementById('sign-in').disabled = true;

                }).catch(function (error) {
                    alert(error);
                    alert('Invalid verification code.');
                });
            }).catch(function (error) {
                alert(error);
                alert('Please reload the page and re-verify.');
            });

            this.props.change(this.state.number);
        }
     }

  render() {
      return (

          <div className="signup">
              <script src="https://www.gstatic.com/firebasejs/4.8.1/firebase.js" ></script>
              <link href="https://getbootstrap.com/docs/4.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous" />
              <div class="form">

                  <form class="form-signin">
                      <div class="text-center mb-4">
                          <img class="mb-4" src="" alt="" width="72" height="72" />
                          <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
                      </div>

                      <p>Enter the phone number (Eg: 1010101010) </p>
                      <div class="form-label-group">
                          <input type="tel" id="inputNumber" class="form-control" pattern="[0-9]{10}" placeholder="Phone Number" onChange={this.handleNumChange} required autofocus required autocomplete="tel"/>
                         <label for="inputNumber">Phone Number</label>
                      </div>
                      <button type='button' id='sign-in' onClick={() => this.getOTP()} class="btn btn-lg btn-primary btn-block">Get OTP</button><br/>
                      <form action="/dashboard"><button disabled='true' id='login' type='submit' class="btn btn-lg btn-primary btn-block">Login</button></form> 
                       <p class="mt-5 mb-3 text-muted text-center">&copy; 2019</p>
                  </form>
              </div>
          </div>
    )
  }
}