import "./Button.css"
const Button = (props)=>{
    return(
        <div>
        <button className="proBtn">{props.name}</button> 
        </div>
    )
}

export default Button;