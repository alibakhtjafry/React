// import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  const updateName=()=>{
    let newName=prompt("Enter New Name: ");
    if(newName){
      props.changeName(newName);
    }
  };
  return (
    <>
      <title>NavBar componenet</title>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <button onClick={updateName}>
            change name click!
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.aboutText}</a>
                </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
      </>
  );
}
Navbar.prototype={title: PropTypes.string,
    aboutText: PropTypes.string,
}

Navbar.defaultProps={
    title: "TextUtils",
    aboutText: "About Text here"
}
