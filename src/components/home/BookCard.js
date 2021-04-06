import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class BookCard extends Component {
    render() {
        const {book} = this.props;
        return (
                <div className="col-md-3 mb-5">
                    <div className="card card-body bg-dark text-center h-100">
                        <img className="w-100 mb-2" src={book.volumeInfo.imageLinks.thumbnail} alt="Book Cover" />
                        <h5 className="text-light card-title">
                        {book.volumeInfo.title}
                        </h5>
                        <Link className="btn btn-danger mt-auto" to={'/book/' + book.id}>
                            Details
                            <i className="fas fa-chevron-right" />
                        </Link>
                    </div>
                </div>
        )
    }
}

export default BookCard
