import './Box.css'

function Box(props){
    return(
        <div className="boxContainer">
            <div className="subBoxIcon"><img src ={props.icon}></img></div>
            <div className="subBoxTitle"><h3>{props.title}</h3></div>
            <div className="subBoxDescription">{props.description}</div>
        </div>
    )
}

export default Box;