import React from 'react';
import "./LandingPage.css"
import SelectStore from './SelectStore';
import StorePage from './StorePage';
import SlideButtons from './SlideButtons';


const LandingPage = ()=>{

    return (
        <div className = "page_wrapper">
            <div className = "landingPage_container">
                <div>
                    <h4 className = "land_page_title">START SHOPPING FROM HOME</h4>
                    <p className = "land_page_subtitle">Track items on the shelve and cut time spent in the store by 70%</p>
                </div>
                <div>
                <SelectStore/>
                </div>
            </div>

            <StorePage/>
            <SlideButtons/>
           
           
        </div>
    )
}


export default LandingPage;