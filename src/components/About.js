import React, { Component } from 'react';
import './AboutUs.css';
export default class About extends Component {
    state = {
    }
    render() {
        return (
            <div>
        
                <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                <br />
                <div class="image-aboutus-banner" >
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <h1 class="lg-text">About Us</h1>
                                <p>It's nice to meet you!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div class="container">
                    <h3 class="text-center">Contact Us</h3>
                    <br/>
                    <p>Know more about us on this page.</p>

                    <p class="text-center"><em>We'd love to help you!</em></p>
                    <br/>
                        <div class="text-center">
                            <p>Queries? Feedback? Drop a note.</p><br/>
                            <p><span class="glyphicon glyphicon-map-marker"></span> Karnataka, India</p>
                            <p><span class="glyphicon glyphicon-phone"></span> Phone: +91 15151 51515</p>
                        <p><span class="glyphicon glyphicon-envelope"></span> Email: home_alone@gmail.com</p>
                        </div>
                    
                </div>
                <div class="footer-section">
                    <div class="footer">
                        <div class="container">
                            <div class="text-center">
                                <h5>About Us </h5>
                                <p>An SOS Progressive Web App for people alone at home. Still in development stage.</p>
                            
                            </div>
                           
                         

                            <div class="clearfix"></div>
                        </div>
                    </div>

                    <div class="footer-bottom">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12 text-center ">
                                    <div class="copyright-text">
                                        <p>CopyRight &copy; 2019 Digital All Rights Reserved</p>
                                    </div>
                                </div> 
                            
					        </div>
                        </div>
                    </div>
                </div>  
            </div>
        )
    }
}