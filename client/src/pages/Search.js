import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import Navbar from "../components/Navbar/Navbar"

function Search() {

    const [books, setBook] = useState([])
    const [search, setSearch] = useState([])
    
    useEffect(() => {
        API.findBooks("harry potter").then(res => {
            console.log(res)
            setBook(res);
        }) 
    }, [])

    function updateSearch(e) {
        setSearch(e.target.value)
    }

    return (
        <div>
            <Navbar
                updateSearch={updateSearch}
                page="search"
            />
            
        </div>
    )
}

export default Search
