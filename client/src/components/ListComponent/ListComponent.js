import React from 'react'
import API from '../../utils/API'
import './ListComponent.css'

let isSearch = false;

function ListComponent(props) {

    if (props.page === "search") {
        isSearch = true
    }

    function openLink (e) {
        window.location.href = e.target.value
    }

    function saveBook(e) {
        API.saveBook(props.data[e.target.id])
    }

    function deleteBook(e) {
        API.deleteBook(e.target.id).then(() => {
            window.location.reload();
        })
    }

    return (
        <div>
            {props.data.map((book,i) => {
                return (
                    <div className="card mb-5 mt-5">
                        <div className="row ContainerDes">
                            <div className="col-2">
                                <img src={book.image} className="card-img-top imgDes" alt={book.title} />
                            </div>
                            <div className="col-10">
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text">{book.description}</p>
                                    {isSearch ? 
                                    <div> 
                                        <button onClick={openLink} value={book.link} className="btn btn-primary mr-1">view book</button>
                                        <button onClick={saveBook} id={i} className="btn btn-primary ml-1">save book</button>
                                    </div>
                                    : 
                                    <button onClick={deleteBook} id={book._id} className="btn btn-primary">Delete</button>
                                    } 
                                    </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ListComponent
