import React, { useState, useEffect } from 'react'
import Button from './Button'
import "./SelectStore.css"
import { Outlet, Link } from 'react-router-dom'
const SelectStore = () => {
    const [location, setLocation ] = useState('')
    useEffect(()=>{
        if('geolocation' in navigator){
            navigator.geolocation.getCurrentPosition(position => setLocation(position) )  
    }},[])
    console.log(location)

    return (
      
        <>
        <div className = "selectStore_wrapper">
        <div>
        <input
            placeholder='Find a Store'
         />
        </div>
         
         <div className='select_locations '>
         <select value = {location} onChange = {e=> setLocation(e.target.value)}>
            <option>Select Store Location</option>
            <option value = "">Current Location</option>
            <option value = "Oakland">Oakland CA</option>
            <option value ="San Leandro">San Leadnro CA</option>
         </select>
         </div>

        <Link to="/app">
        <Button name = "Enter Store"/>
        </Link>
        

        </div>
        <Outlet/>
        </>
    )
        
}


export default SelectStore