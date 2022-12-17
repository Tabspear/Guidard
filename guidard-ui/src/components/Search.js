import "./Search.css"
import Button from "./Button";


const Search = (props)=>{
    

    const handleSearch = (event)=>{
        props.OnInputValue(event.target.value)
    }
    return(
        
        <form className="search_wrapper">
        <div className = "search">
            <h3>Locate</h3>
            <input placeholder = "Type Name of Item"
             type = "text"
             required ="required" 
             id= "search-item"
             onChange = {handleSearch}
             />
        </div>
      
        <div className="btn">
        <Button type= 'submit' name = "Search" onClick = {props.onSubmit}/>
        <Button type= 'submit' name = "Clear"/>
        </div>
       
       
        </form>
    )
}

export default Search;
