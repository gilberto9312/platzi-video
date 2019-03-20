import React from 'react';
import './menu.css'



function Menu (props){

  function myFunction(event) {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 
    return(

      <div className="topnav" id="myTopnav">
          
          <a href="#"onClick={props.handleNosotros}>Nosotros</a>
          <a href="#" onClick={props.handleContacto}>Contacto</a>
          
          <a href="javascript:void(0);" className="icon" onClick={myFunction}>
            <i className="fa fa-bars">menu</i>
          </a>
      </div>

      
    )
}
export default Menu;