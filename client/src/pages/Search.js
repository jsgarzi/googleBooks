import React, { useState, useEffect } from 'react'
import API from '../utils/API'

function Search() {

    const [books, setBook] = useState([])
    
    useEffect(() => {

        API.findBooks("harry potter").then(res => {
            console.log(res)
            setBook(res);
        })
        
    }, [])



    return (
        <div>
            
        </div>
    )
}

export default Search
