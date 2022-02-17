import React, {Component} from 'react';


class MainSection extends Component {
    render() {
        return (
                <div className="mainSection">
                    <div className="filter">
                        <header>
                            <p className="lashes">LASHES</p>
                            <div className="header-container">
                                <p className="comingSoon">Coming Soon on:</p>
                                <i className="fab fa-apple apple"></i>
                                <p className="appStore">App Store</p>
                                <i className="fab fa-google-play google"></i>
                                <p className="googlePlay">Google Play</p>
                            </div>

                        </header>
                        <div className="container">
                            <h1 className="salon">SALON</h1>
                            <p className="quality">Quality Lashes from the comfort of your home</p>
                            <button className="subscribe">Subscribe</button>
                        </div>
                    </div>
                </div>
        );
    }
}

export default MainSection;
