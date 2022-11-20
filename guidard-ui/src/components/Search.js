import "./Search.css"
import Button from "./Button";
const Search = ()=>{
    return(
        <div className="search_wrapper">
        <div className = "search">
            <h3 for = "search-item">Locate</h3>
            <input placeholder = "Type Name of Item" required ="required" id= "search-item"/>
        </div>
      
        <div className="btn">
        <Button name = "Search"/>
        <Button name = "Clear"/>
        </div>
       
       
        </div>
    )
}

export default Search;