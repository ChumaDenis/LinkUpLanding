import React, {Component} from 'react';
import "./Styles/footer.css"
class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <p className="lashes">LASHES</p>
                    <div className="container">
                        <i className="far fa-copyright copyright"></i>
                        <p className="allRights">All Rights Reserved</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;