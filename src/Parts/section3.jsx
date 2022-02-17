import React, {Component} from 'react';
import andrea from "./assets/img/andrea.png";
import iphone from "./assets/img/iphone.png";

import Container from "./components/container";

class Section3 extends Component {
    render() {
        return (
            <div className="section2">
                <img className="andrea" src={andrea} alt=""/>
                <div className="container">
                    <img className="iphone" src={iphone} alt=""/>
                    <Container
                        number="01"
                        header="Make your own schedule"
                        text="Work then you want, without having to go into a salon everyday."
                    />
                </div>
            </div>
        );
    }
}

export default Section3;