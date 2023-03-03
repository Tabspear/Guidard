import React, { useState } from 'react';
import "./Slider.css";
import Hardware from "../img/jelleke-vanooteghem-Hardware-unsplash.jpg";
import Grocery from "../img/Grocery.jpg";
import Beauty from "../img/Beauty.jpg";
import Slide from './Slide';
const t = [
  {
    id: 0,
    title: "Hardware Store",
    img: Hardware,
  },
  {
    id: 1,
    title: "Beauty Store",
    img: Beauty,
  },
  {
    id: 2,
    title: "Grocery Store",
    img: Grocery,
  },
];

const Slider = (props) => {
  const [slide, setSlide] = useState(t);

    const handleImageRightChange = ()=>{
       for(let i = 0; i<=slide.length; i++){
          setSlide(i+1)
       }
    }
    const handleImageLeftChange = ()=>{
      for(let i = 0; i<=slide.length; i++){
         setSlide(i-1)
      }
   }

   return (
    <>
    {slide.map((item)=> {
      return <Slide key ={item.id.toString} itemTitle = {item.title} itemImage ={item.img}/>
    })}
    
    
    </>
   )

   



  
  
  // const handleImageChange = () => {slide.map((item) => (
  //   <SlideCom itemTitle={item.title} itemImage={item.img} key = {item.id.toString()}/>
  // ))};
};

export default Slider;
