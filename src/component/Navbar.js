import React from 'react'

export default function Navbar(props) {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} my-3`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.name}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
        </ul>
        <button type="button" onClick={props.enbDarkMode} className={`btn btn-primary btn-${props.mode==='light' ?'light':'dark'}`}>dark mode</button>
      </div>
    </div>
  </nav>
    )
}

Navbar.defaultProps = {
    name : "Set Navbar"
}
