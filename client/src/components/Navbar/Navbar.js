import React from 'react'
import './Navbar.css'

let isSearch = false;

function Navbar(props) {

    if (props.page === "search") {
        isSearch = true
    }

    return (
        <nav className="navbar navbar-light bg-secondary">
            <div className="container-fluid">
                <p className="navbar-brand siteName">Google Books Search</p>
                <a className="nav-link active ml-auto linkStyle" aria-current="page" href="/">Search</a>
                <a className="nav-link active linkStyle" aria-current="page" href="/saved">Saved</a>
                {isSearch ?
                    <form className="d-flex">
                        <input className="form-control me-2 simplebox" type="search" placeholder="Search..." aria-label="Search" onChange={props.updateSearch} />
                        <button className=" ml-1 btn btn-outline-success buttonStyle" type="submit" onClick={props.search}>Search</button>
                    </form>
                    : <></>}
            </div>
        </nav>
    )
}

export default Navbar
