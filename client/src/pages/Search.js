import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import Navbar from "../components/Navbar/Navbar"
import ListComponent from "../components/ListComponent/ListComponent"

function Search() {

    const [books, setBook] = useState([])
    const [search, setSearch] = useState([])
    
    useEffect(() => {
        
    }, [])

    function updateSearch(e) {
        setSearch(e.target.value)
    }

    function searchBook(e) {
        e.preventDefault()
        API.findBooks(search).then(res => {
            let data = res.data.items.map(book => {
                
                // sometimes author comes back undefined
                let author
                if (book.volumeInfo.authors != undefined) {
                    author = book.volumeInfo.authors.join(', ');
                } else {
                    author = "No Author"
                }

                // sometimes image comes back undefined
                let image
                if (book.volumeInfo.imageLinks != undefined) {
                    image = book.volumeInfo.imageLinks.thumbnail
                }

                return ({
                    title: book.volumeInfo.title,
                    author: author,
                    description: book.volumeInfo.description,
                    image: image,
                    link: book.volumeInfo.infoLink
                })
            })
            
            setBook(data);
        }) 
    }

    return (
        <div>
            <Navbar
                updateSearch={updateSearch}
                search={searchBook}
                page="search"
            />

            <ListComponent
                data={books}
                page="search"
            />    
        </div>
    )
}

export default Search
