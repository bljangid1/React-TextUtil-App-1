import React from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
    
export default function Navbar(props){
    return(
        // <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <Link className="navbar-brand" exct to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" exact to="/about">{props.aboutText}</Link>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Action</a>
                <a className="dropdown-item" href="/">Another action</a>
                <div className="dropdown-divider" ></div>
                <a className="dropdown-item" href="/">Something else here</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
            </li> */}
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </form> */}
  <i className="bi bi-brightness-high-fill mx-2"></i>
   
        </div>
        

        <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.controlMode} type="checkbox" id="flexSwitchCheckChecked" /> 
  <label className="form-check-label text-light"  htmlFor="flexSwitchCheckDefault"><i className="bi bi-brightness-high"></i></label>
</div>
      </nav>
        
    ) 

}
Navbar.propTypes = {
  title : PropTypes.string,
  aboutText : PropTypes.string
}
Navbar.defaultProps = {
  title : 'Set Title Text',
  aboutText : 'Set About Text'
}