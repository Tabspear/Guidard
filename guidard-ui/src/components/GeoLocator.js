import React,{useState, useEffect} from 'react';

const GeoLocator = ()=> {
 const [latitude, setLatitude] = useState(null)
 const [longitude, setLongitude] = useState(null)
 const [error, setError] = useState(null)

 useEffect(()=>{
 navigator.geolocation.getCurrentPosition(
    (position)=>{
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
    },
     (error)=>{
        setError(error.message)
     }, 
     {
        enableHighAccuracy:true, timeout: 20000, maximumAge: 1000
     }
 )
 }, [])


 return(
    <div>
    Latitude: {latitude}
    <br/>
    Longitude: {longitude}
    <br/>
    Error: {error}
    </div>
 )
}

export default GeoLocator;