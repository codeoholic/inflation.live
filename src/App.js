import React from 'react';
import './App.css';
import arrowDown from './icons/arrowDown.png';
import food from './icons/food.png';
import tobacco from './icons/tobacco.png';
import clothing from './icons/clothing.png';
import housing from './icons/housing.png';
import fuel from './icons/fuel.png';
import miscellaneous from './icons/miscellaneous.png';

function App() {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <p>
                        Inflation.live
                    </p>
                    <p className="about-project margin-top-10">Inflation rates in various categories and states in India.<br/>This will help in visualizing Indian economy.</p>
                    <img src={arrowDown} className="lets-start" alt="lets-start" />
                </header>
            </div>
            <div className="App">
                <header className="app-section-one">
                    <p className="state-name">India</p>
                    <p className="heading margin-top-20">2.92%</p>
                    <p className="about-project margin-top-10">Average Inflation</p>
                    <p className="sub-heading margin-top-20">1.87% - 4.23%</p>
                    <p className="about-project margin-top-10">Rural vs Urban</p>
                    <p className="sub-heading margin-top-40">inflation across categories</p>
                    <div className="margin-top-20">
                        <div className="inline">
                            <img src={food} alt="food-and-beverages" className="icon"/>
                            <p className="sub-heading-large margin-top-20">1.38%</p>
                            <p className="about-project margin-top-10">Food and Beverages</p>
                            <p className="sub-heading margin-top-10">-0.43% - 4.42%</p>
                        </div>
                        <div className="inline">
                            <img src={tobacco} alt="tobacco-and-intoxicants" className="icon"/>
                            <p className="sub-heading-large margin-top-20">4.27%</p>
                            <p className="about-project margin-top-10">Tobacco and Intoxicants</p>
                            <p className="sub-heading margin-top-10">4.36% - 4.08%</p>
                        </div>
                        <div className="inline">
                            <img src={clothing} alt="clothing-and-footwear" className="icon"/>
                            <p className="sub-heading-large margin-top-20">2.01%</p>
                            <p className="about-project margin-top-10">Clothing and Footwear</p>
                            <p className="sub-heading margin-top-10">0.74% - 4.26%</p>
                        </div>
                        <div className="inline">
                            <img src={housing} alt="housing" className="icon"/>
                            <p className="sub-heading-large margin-top-20">4.76%</p>
                            <p className="about-project margin-top-10">Housing</p>
                            <p className="sub-heading margin-top-10">N.A - 4.76%</p>
                        </div>
                        <div className="inline">
                            <img src={fuel} alt="fuel-and-light" className="icon"/>
                            <p className="sub-heading-large margin-top-20">2.56%</p>
                            <p className="about-project margin-top-10">Fuel and Light</p>
                            <p className="sub-heading margin-top-10">1.95% - 3.61%</p>
                        </div>
                        <div className="inline">
                            <img src={miscellaneous} alt="miscellaneous" className="icon"/>
                            <p className="sub-heading-large margin-top-20">5.10%</p>
                            <p className="about-project margin-top-10">Miscellaneous</p>
                            <p className="sub-heading margin-top-10">6.26% - 3.82%</p>
                        </div>
                    </div>
                </header>
            </div>
            <div className="App">
                <header className="App-header">
                    <p className="state-name">Delhi</p>
                    <p className="heading margin-top-20">4.24%</p>
                    <p className="about-project margin-top-10">Average Inflation</p>
                    <p className="sub-heading margin-top-20">11.19% - 3.87%</p>
                    <p className="about-project margin-top-10">Rural vs Urban</p>
                </header>
            </div>
            <div className="App">
                <header className="app-section-one">
                    <p className="about-project margin-top-10">SOURCE</p>
                    <p className="about-project margin-top-10">GOVERNMENT OF INDIA<br/>MINISTRY OF STATISTICS AND PROGRAMME IMPLEMENTATION</p>
                    <p className="about-project margin-top-40">hobby project by <a href="https://twitter.com/codeoholic" target="_blank" rel="noopener noreferrer">@codeoholic</a>.</p>
                </header>
            </div>
        </div>
    );
}

export default App;