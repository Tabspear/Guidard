import React, { useState} from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Display from "./components/Display";
import axios from "axios";
const App = (props) => {
  const [result, setResult] = useState(null);
  const [value, setValue] = useState('');

  const baseUrl = "http://localhost:3002/items/";

  const handleSearchValue = (val) => {
    setValue(val);
  };

  const handleSubmit = (event) => {
   event.preventDefault()
   axios
   .post(`${baseUrl}${value}`, {})
   .then((response) =>  setResult(response.data))
   .catch((error) => console.log(error));   
  }

  return (
    <div>
      <Header />
      <Search OnInputValue={handleSearchValue} onSubmit = {handleSubmit}/>
      <Display Items={result} />
    </div>
  );
};

export default App;
