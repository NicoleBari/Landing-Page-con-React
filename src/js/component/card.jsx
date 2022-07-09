import React from "react";
import PropTypes from 'prop-types';

function Card(props){
    return (
        <div className="card mt-4 mb-5" style={{"width": "18rem","background-color":"#EDF6F9"}}>  
        <img src={props.img} className="card-img-top img-fluid" style={{"height":"15rem"}} alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{props.titulo}</h5>
          <p className="card-text">{props.parrafo}</p>
          <a href={props.link} target="_blank" className="btn btn-primary" onClick={()=>{}}>Go somewhere</a>
        </div>
      </div>

    );
}

Card.propTypes = {
  img:  PropTypes.string,
  titulo:  PropTypes.string,
  mensaje:  PropTypes.func,
 };

export default Card