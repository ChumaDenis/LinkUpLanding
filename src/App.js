import React from "react";
import "./Styles/App.css"
import "./Styles/firstScroll.css"
import "./Styles/secondScroll.css"
import "./Styles/thirdScroll.css"
import "./Styles/fourthScroll.css"
import "./Styles/fifthScroll.css"
import "./Styles/sixthScroll.css"
import iphone from './img/iphone.png';
import andrea from './img/andrea.svg';
import image from './img/image.svg';

import circle1 from './img/circle1.svg';
import circle2 from './img/circle2.svg' ;
import img1 from "./img/phone/img1.svg";
import img2 from "./img/phone/img2.svg";
import explore from "./img/explore.svg";
import img from "./img/polina.svg";
function App() {
    return(
        <body className="general">
            <div>
                <div className="firstScroll">
                    <div className="filter">
                        <div className="header">
                            <p className="lashes">LASHES</p>
                            <p className="comingSoon">Coming Soon on:</p>
                            <i className="fab fa-apple apple"></i>
                            <p className="appStore">App Store</p>
                            <i className="fab fa-google-play google"></i>
                            <p className="googlePlay">Google Play</p>
                        </div>
                        <div className="body">
                            <p className="salon">SALON</p>
                            <p className="quality">Quality Lashes from the comfort of your home</p>
                            <button className="subscribe">Subscribe</button>
                        </div>
                    </div>
                </div>
                <div className="secondScroll">
                    <p className="comingSoon">Coming Soon</p>
                    <p className="headerText">Lash Experts to your doors <br/> within hours</p>
                    <p className="text">A curated collection of the best lash artists in your city.
                        With the click of a button we bring <br/> the salon experience to your door step.
                        No more difficulty getting appointments or <br/> navigating crowded lash salons.
                        lash services from the comfort of your home.
                        <br/><br/>
                        Search for top-rated lash artists in your area. Read reviews. Book a lash appointment and <br/> let us
                        do the rest.
                    </p>
                </div>
                <div className="thirdScroll">
                    <img className="andrea" src={andrea} alt=""/>
                    <img className="iphone" src={iphone} alt=""/>
                    <div className="body">
                        <p className="number">01</p>
                        <p className="headerText">Make your own <br/> schedule</p>
                        <p className="text">Work then you want, without having to go into a <br/> salon everyday.</p>
                    </div>
                </div>

                <div className="fourthScroll">
                    <div className="body">
                        <p className="number">02</p>
                        <p className="headerText">Make good <br/> money</p>
                        <p className="text">Who says artists can’t get paid well? Our clients <br/> appreciate your mastery.</p>
                    </div>
                    <img className="image" src={image} alt=""/>
                </div>


                <div className="fifthScroll">
                    <div className="body">
                        <p className="number">03</p>
                        <p className="headerText">Make your <br/> skills sharper</p>
                        <p className="text">Apply to be a Master lash artist with increased <br/> marketing perks and pricing
                            for your services and <br/> talent.</p>
                    </div>
                    <div className="body">
                        <p className="number">04</p>
                        <p className="headerText">Make it <br/> personal</p>
                        <p className="text">Get to know your clients and build a bigger book <br/> of clients faster.</p>
                    </div>

                    <div className="group">
                        <div className="circles">
                            <img className="circle" src={circle1} alt=""/>
                            <img className="circle" src={circle1} alt=""/>
                            <img className="circle" src={circle2} alt=""/>
                        </div>
                        <div className="phone">
                            <img className="explore" src={explore} alt=""/>
                            <img className="img1" src={img1} alt=""/>
                            <img className="img2" src={img2} alt=""/>
                        </div>
                    </div>

                    <div className="miniDiv">
                        <p className="comingSoon">Coming Soon on</p>
                        <button>
                            <i className="fab fa-apple fa-2x left-apple"></i>
                            <p className="pBtn">App Store</p>
                        </button>
                        <button>
                            <i className="fab fa-google-play left-google"></i>
                            <p className="pBtn">Google Play</p>
                        </button>
                    </div>
                </div>
                <div className="sixthScroll">
                    <img className="img" src={img} alt=""/>

                        <div className="body">
                            <p className="textSixthScroll">subscribe</p>
                            <input className="input" placeholder="First name"/>
                            <input className="input" placeholder="Last name"/>
                            <input className="input" placeholder="Interested in being a client or lashes"/>
                            <input className="input" placeholder="City"/>
                            <input className="input" placeholder="State"/>
                            <input className="input" placeholder="Phone Number "/>
                            <input className="input" placeholder="Email"/>
                            <button className="subscribe">Subscribe</button>
                        </div>

                </div>
            </div>
        </body>
    );
}

export default App;
