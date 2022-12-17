import React from 'react';
import "./Display.css"
const Display = ({ Items }) => {
    return (
        <div className="display_wrapper">
            <div className="display_wrapper_inner">
                {Array.isArray(Items)? Items.map((item)=>{ return(
                    <div key= {item.id}>
                        {item.name}, {item.type}, {item.location}
                    </div>
                )
                }):null}
            </div>
        </div>
    )
}





export default Display;