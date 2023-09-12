import React from 'react'
import './FooterBanner.css'


function FooterBanner() {

    return(
        <div class="footer-dark">
            <footer>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 item">
                            <h3>Explore</h3>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Questions</a></li>
                                <li><a href="#">Articles</a></li>
                                <li><a href="#">Tutorials</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3 item">
                            <h3>Support</h3>
                            <ul>
                                <li><a href="#">FAQ's</a></li>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3 item">
                            <h3>Stay Connected</h3>
                            <ul>
                            <div class="col item social">
                                <a href="#"><i class="fa fa-facebook"><img src = {require("./Images/Facebook.png")} alt="logo" width={35} height={35} /></i></a>
                                <a href="#"><i class="fa fa-twitter"><img src = {require("./Images/twitter.png")} alt="logo" width={35} height={35} /></i></a>
                                <a href="#"><i class="fa fa-instagram"><img src = {require("./Images/instagram.png")} alt="logo" width={35} height={35} /></i></a>
                            </div>
                            </ul>
                        </div>
                        
                        
                        
                    </div>
                </div>
            </footer>
        </div>

    )
}

export default FooterBanner