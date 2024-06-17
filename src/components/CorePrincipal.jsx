import "./CorePrincipal.css";

// function CorePrinciple(props) { 
// Object destructuring
function CorePrinciple({ image, title, description }) {
  

    return (
      <li>
        
  
        
        <h3>{title}</h3>
        <p> {description} </p>
      </li>
    )
  }

  export default CorePrinciple;