import React from 'react'
import API from '../../utils/API'

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
                    <div className="card">
                        <div className="row">
                            <div className="col-4">
                                <img src={book.image} className="card-img-top" alt={book.title} />
                            </div>
                            <div className="col-8">
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text">{book.description}</p>
                                    {isSearch ? 
                                    <div> 
                                        <button onClick={openLink} value={book.link} className="btn btn-primary">view book</button>
                                        <button onClick={saveBook} id={i} className="btn btn-primary">save book</button>
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
