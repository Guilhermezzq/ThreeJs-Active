import "./CorePrincipal.css"


function CorePrinciple({ model, title , description }) {

    return (
        <li>
            <div> {model} </div>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}


export default CorePrinciple;