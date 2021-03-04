import React, { useState, useEffect } from 'react'
import Navbar from "../components/Navbar/Navbar"
import ListComponent from "../components/ListComponent/ListComponent"
import API from '../utils/API'

function Saved() {

    const [books, setBook] = useState([{}])

    useEffect(() => {
       API.getBooks().then(res => {
           setBook(res.data)
       })
    }, [])

    return (
        <div>
            <Navbar/>
            <ListComponent
                data={books}
            />
        </div>
    )
}

export default Saved
