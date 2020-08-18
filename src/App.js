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
                    <p className="heading margin-top-20">6.93%</p>
                    <p className="about-project margin-top-10">Average Inflation</p>
                    <p className="sub-heading margin-top-20">6.84% - 7.04%</p>
                    <p className="about-project margin-top-10">Rural vs Urban</p>
                    <p className="sub-heading margin-top-40">inflation across categories</p>
                    <div className="margin-top-20">
                        <div className="inline">
                            <img src={food} alt="food-and-beverages" className="icon"/>
                            <p className="sub-heading-large margin-top-20">8.71%</p>
                            <p className="about-project margin-top-10">Food and Beverages</p>
                            <p className="sub-heading margin-top-10">8.95% - 8.26%</p>
                        </div>
                        <div className="inline">
                            <img src={tobacco} alt="tobacco-and-intoxicants" className="icon"/>
                            <p className="sub-heading-large margin-top-20">12.35%</p>
                            <p className="about-project margin-top-10">Tobacco and Intoxicants</p>
                            <p className="sub-heading margin-top-10">11.98% - 13.22%</p>
                        </div>
                        <div className="inline">
                            <img src={clothing} alt="clothing-and-footwear" className="icon"/>
                            <p className="sub-heading-large margin-top-20">2.91%</p>
                            <p className="about-project margin-top-10">Clothing and Footwear</p>
                            <p className="sub-heading margin-top-10">2.39% - 3.64%</p>
                        </div>
                        <div className="inline">
                            <img src={housing} alt="housing" className="icon"/>
                            <p className="sub-heading-large margin-top-20">3.25%</p>
                            <p className="about-project margin-top-10">Housing</p>
                            <p className="sub-heading margin-top-10">N.A - 3.25%</p>
                        </div>
                        <div className="inline">
                            <img src={fuel} alt="fuel-and-light" className="icon"/>
                            <p className="sub-heading-large margin-top-20">2.8%</p>
                            <p className="about-project margin-top-10">Fuel and Light</p>
                            <p className="sub-heading margin-top-10">-0.41% - 8.9%</p>
                        </div>
                        <div className="inline">
                            <img src={miscellaneous} alt="miscellaneous" className="icon"/>
                            <p className="sub-heading-large margin-top-20">6.95%</p>
                            <p className="about-project margin-top-10">Miscellaneous</p>
                            <p className="sub-heading margin-top-10">6.1% - 7.88%</p>
                        </div>
                    </div>
                </header>
            </div>
            <div className="App">
                <header className="App-header">
                    <p className="state-name">Delhi</p>
                    <p className="heading margin-top-20">3.6%</p>
                    <p className="about-project margin-top-10">Average Inflation</p>
                    <p className="sub-heading margin-top-20">2.11% - 3.67%</p>
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