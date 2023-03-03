import React from 'react'
import "./Slider.css"

const Slide = ({itemImage, itemTitle, style})=> {
    return (

        <div style={style}>
          <div>
            <h1>{itemTitle}</h1>
          </div>
          <div>
            <img
              src={itemImage}
              alt={itemTitle}
              className="responsive "
            />
          </div>
      
        </div>
       
     )
}

export default Slide