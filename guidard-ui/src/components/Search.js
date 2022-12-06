import React,{useState} from 'react'
import "./Search.css"
import Button from "./Button";
const Search = ()=>{
    const [value, setValue] = useState();

    return(
        
        <div className="search_wrapper">
        {console.log(value)}
        <div className = "search">
            <h3>Locate</h3>
            <input placeholder = "Type Name of Item"
             type = "text"
             value = {value || ''}
             required ="required" 
             id= "search-item"
             onChange = {(event)=>setValue(event.target.value)}
             />
            
        </div>
      
        <div className="btn">
        <Button name = "Search"/>
        <Button name = "Clear"/>
        </div>
       
       
        </div>
    )
}

export default Search;