import React from 'react'
import API from '../../utils/API'

function ListComponent(props) {

    function openLink (e) {
        window.location.href = e.target.value
    }

    function saveBook(e) {
        API.saveBook(props.data[e.target.id]).then(res => {
            console.log(res)
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
                                    <button onClick={openLink} value={book.link} className="btn btn-primary">view book</button>
                                    <button onClick={saveBook} id={i} className="btn btn-primary">save book</button>
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
