import React, {Component} from 'react';


class FirstScroll extends Component {
    render() {
        return (
                <div className="firstScroll">
                    <div className="filter">
                        <header>
                            <p className="lashes">LASHES</p>
                            <div className="container">
                                <p className="comingSoon">Coming Soon on:</p>
                                <i className="fab fa-apple apple"></i>
                                <p className="appStore">App Store</p>
                                <i className="fab fa-google-play google"></i>
                                <p className="googlePlay">Google Play</p>
                            </div>

                        </header>
                        <div className="body">


                            <p className="salon">SALON</p>
                            <p className="quality">Quality Lashes from the comfort of your home</p>
                            <button className="subscribe">Subscribe</button>
                        </div>
                    </div>
                </div>
        );
    }
}

export default FirstScroll;
