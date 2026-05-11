import React from "react";
import "./Parts/Styles/App.css"
import "./Parts/Styles/mainSection.css"
import "./Parts/Styles/section1.css"
import "./Parts/Styles/section2.css"
import "./Parts/Styles/section3.css"
import "./Parts/Styles/section4.css"
import "./Parts/Styles/section5.css"
import "./Parts/Styles/footer.css"


import MainSection from "./Parts/mainSection";
import Section2 from "./Parts/section2";
import Section3 from "./Parts/section3";
import Section4 from "./Parts/section4";
import Section1 from "./Parts/section1";
import Section5 from "./Parts/section5";
import Footer from "./Parts/footer";
function App() {
    return(
        <div className="general">
            <MainSection/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section1/>
            <Section5/>
            <Footer/>
        </div>
    );
}

export default App;
