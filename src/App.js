import React from 'react';
import './App.css';
import arrowDown from './icons/arrowDown.png';

function App() {
    return (
        <div>
            <div className="App">
                <header className="App-header">
                    <p>
                        Inflation.live
                    </p>
                    <p className="about-project margin-top-10">I will simply display the inflation rates in various categories and states in India. This will help in visualizing the Indian economy a litte. This is a side project of <a href="https://twitter.com/codeoholic" target="_blank" rel="noopener noreferrer">@codeoholic</a>.</p>
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
        </div>
    );
}

export default App;