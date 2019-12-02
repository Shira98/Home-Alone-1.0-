import React, { Component } from 'react';
import './Pro.css';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.handleMailChange = this.handleMailChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleImgChange = this.handleImgChange.bind(this);
        this.signIn = this.signIn.bind(this);
        this.state = {
            email: localStorage.getItem('mail'),
            text: localStorage.getItem('username'),
            //img: localStorage.getItem(this.props.user.img_url)
        };
    }

    handleMailChange(e) {
        if (e != "") {
            //alert('NOt');
            this.setState({ email: e.target.value });
        }
        else {
            //alert('Empty');
            this.setState({ email: localStorage.getItem('mail') });
        }
    }
    handleNameChange(nm) {
        if (nm != "") {
            this.setState({ text: nm.target.value });
        }
        else {
            this.setState({ text: localStorage.getItem('username')});
        }
    }

    handleImgChange(i) {
        this.setState({ img: i.target.value })
    }

    signIn() {
        
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(this.state.email) == false) {

            alert('Please enter a valid email address. Eg: emailid@mail.xyz');
        }
        else {
            this.props.change(this.state.text, this.state.email);
            //this.props.change(this.state.email);
            alert('Details edited!');
        }
     }
    render() {
        return (
            <div className="profile">
                <br /><br />
                <h2>Profile</h2><br />
                <link href="https://getbootstrap.com/docs/4.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous" />
                <h5>Edit personal information.</h5><br/>
                <p>If you're new, please set up email and username below.</p>

                <p>Click the button 'Save' below when you're done editing, or click 'Cancel' if you wish to discard the changes.</p> 
                <br/><br/>
                 <div class="container">
                    <div class="row">
                      <div class="col-md-3">
                       </div>
                      <div class="col-md-9 personal-info">

                            <form class="form-horizontal" role="form" action='/profile'>
                             
                             <div class="form-group">
                                <label class="col-lg-3 control-label">Email:</label>
                                    <div class="col-lg-8">
                                        <input class="form-control" id='email' onChange={this.handleMailChange} type="email" placeholder={this.props.user.mail} />
                                </div>
                             </div>
                                                     <br/>       
                            <div class="form-group">
                                <label class="col-md-3 control-label">Username:</label>
                                <div class="col-md-8">
                                        <input class="form-control" id='uname' type="text" onChange={this.handleNameChange} placeholder={this.props.user.username}  />
                                </div>
                            </div>

  
                            <div class="form-group">
                                <label class="col-md-3 control-label"></label>
                                <div class="col-md-8">
                                        <input type="submit" class="btn btn-primary" onClick={this.signIn} value="Save" />
                                        <span></span>
                                        <input type="reset"  class="btn btn-default" value="Cancel" />
                                </div>
                            </div>
                            </form>
                            <br/>
                      </div>
                    </div>
                </div>
               
            </div>

                

        )
    }
}