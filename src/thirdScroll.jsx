import React, {Component} from 'react';
import andrea from "./img/andrea.png";
import iphone from "./img/iphone.png";

import Container from "./components/container";

class ThirdScroll extends Component {
    render() {
        return (
            <div className="thirdScroll">
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

export default ThirdScroll;