import React, {Component} from 'react';
import image from "./img/image.png";
import Container from "./components/container";
class FourthScroll extends Component {
    render() {
        return (
            <div className="fourthScroll">
                <Container className="blackContainer"
                    number="02"
                    header="Make good money"
                    text="Who says artists can’t get paid well? Our clients appreciate your mastery."
                />
                <img className="image" src={image} alt=""/>
            </div>
        );
    }
}

export default FourthScroll;