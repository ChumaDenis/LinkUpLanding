import React from "react";
import "./Styles/App.css"
import "./Styles/firstScroll.css"
import "./Styles/secondScroll.css"
import "./Styles/thirdScroll.css"
import "./Styles/fourthScroll.css"
import "./Styles/fifthScroll.css"
import "./Styles/sixthScroll.css"


import FirstScroll from "./firstScroll";
import SecondScroll from "./secondScroll";
import ThirdScroll from "./thirdScroll";
import FourthScroll from "./fourthScroll";
import FifthScroll from "./fifthScroll";
import SixthScroll from "./sixthScroll";
import Footer from "./footer";
function App() {
    return(
        <div className="general">
            <FirstScroll/>
            <SecondScroll/>
            <ThirdScroll/>
            <FourthScroll/>
            <FifthScroll/>
            <SixthScroll/>
            <Footer/>
        </div>
    );
}

export default App;
