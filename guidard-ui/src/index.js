import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import LandingPage from './components/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function HomePage () {
   return(
    <BrowserRouter>
    <Routes>
    <Route exact path ="/" element = {<LandingPage/>}/>
    <Route path = "app" element = {<App/>}/>
    </Routes>
    </BrowserRouter>
   ) 
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  
         <HomePage/>
   
   
// {/* <App/> */}
)
