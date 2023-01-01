import React from 'react';
import "./LandingPage.css"
import SelectStore from './SelectStore';

const LandingPage = ()=>{

    return (
        <div className = "page_wrapper">
            <div className = "landingPage_container">
                <div>
                    <h4>START SHOPPING FROM HOME</h4>
                    <p>Track items on the shelve and cut time spent in the store by 70%</p>
                </div>
                <div>
                <SelectStore/>
                </div>
            </div>
        </div>
    )
}


export default LandingPage