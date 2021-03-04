import React from 'react'

let isSearch = false;

function Navbar(props) {

    if (props.page === "search") {
        isSearch = true
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <p className="navbar-brand">Navbar</p>
                <a class="nav-link active" aria-current="page" href="/">Search</a>
                <a class="nav-link active" aria-current="page" href="/saved">Saved</a>
                {isSearch ?
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={props.updateSearch} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    : <></>}
            </div>
        </nav>
    )
}

export default Navbar
