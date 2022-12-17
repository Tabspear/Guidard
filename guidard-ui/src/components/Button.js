import "./Button.css"
const Button = (props)=>{
    return(
        <div>
        <button className="proBtn" onClick = {props.onClick}>{props.name}</button> 
        </div>
    )
}

export default Button;