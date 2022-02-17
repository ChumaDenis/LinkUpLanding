import React, {Component} from 'react';
import polina from "./assets/img/polina.png";
import Input from "./components/input";
class Section5 extends Component {
    render() {
        return (
            <div className="section5">
                <img className="img" src={polina} alt=""/>


                <div className="container">
                    <h2>subscribe</h2>
                    <Input name="First name"/>
                    <Input name="Last name"/>
                    <Input name="Interested in being a client or lashes"/>
                    <Input name="City"/>
                    <Input name="State"/>
                    <Input name="Phone Number "/>
                    <Input name="Email"/>
                    <button className="subscribe">Subscribe</button>
                </div>
            </div>
        );
    }
}

export default Section5;