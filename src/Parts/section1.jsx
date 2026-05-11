import React, {Component} from 'react';
import circle1 from "./assets/img/circle1.svg";
import circle2 from "./assets/img/circle2.svg";
import phone from "./assets/img/phone-vixen.svg"

import Container from "./components/container";

class Section1 extends Component {
    render() {
        return (
            <div className="section4 gen-style-section">

                    <div className="container">
                        <Container className="whiteContainer"
                                   number="03"
                                   header="Make your skills sharper"
                                   text="Apply to be a Master lash artist with increased marketing perks and pricing
                        for your services and talent."
                        />
                        <Container className="whiteContainer"
                                   number="04"
                                   header="Make it personal"
                                   text="Get to know your clients and build a bigger book of clients faster."
                        />
                    </div>


                    <div className="group">
                        <div className="circles">
                            <img className="circle" src={circle2} alt=""/>
                            <img className="circle" src={circle1} alt=""/>
                            <img className="circle" src={circle1} alt=""/>
                        </div>
                        <img className="phone" src={phone} alt=""/>
                    </div>

                    <div className="container-buttons">
                        <p className="comingSoon">Coming Soon on</p>
                        <button>
                            <i className="fab fa-apple fa-2x left-apple"></i>
                            <p className="pButton">App Store</p>
                        </button>
                        <button>
                            <i className="fab fa-google-play left-google"></i>
                            <p className="pButton">Google Play</p>
                        </button>

                </div>
            </div>
        );
    }
}

export default Section1;