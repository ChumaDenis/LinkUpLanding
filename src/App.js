import React from "react";
import "./Parts/Styles/App.css"
import "./Parts/Styles/firstScroll.css"
import "./Parts/Styles/secondScroll.css"
import "./Parts/Styles/thirdScroll.css"
import "./Parts/Styles/fourthScroll.css"
import "./Parts/Styles/fifthScroll.css"
import "./Parts/Styles/sixthScroll.css"
import "./Parts/Styles/footer.css"


import FirstScroll from "./Parts/firstScroll";
import SecondScroll from "./Parts/secondScroll";
import ThirdScroll from "./Parts/thirdScroll";
import FourthScroll from "./Parts/fourthScroll";
import FifthScroll from "./Parts/fifthScroll";
import SixthScroll from "./Parts/sixthScroll";
import Footer from "./Parts/footer";
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
