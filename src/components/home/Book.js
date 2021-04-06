import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {setLoading, fetchPoster, fetchBook} from '../../actions/searchActions';

import Spinner from '../layout/Spinner';

export class Book extends Component {
	componentDidMount() {
    this.props.setLoading();
    this.props.fetchPoster(this.props.match.params.id);
		this.props.fetchBook(this.props.match.params.id);
	}
	render() {
    const {loading, poster, book} = this.props;

    let bookInfo = (
    <div className="container">
      <div className="row">
      <div className="col-md-4 card card-body">
          <img src={poster.thumbnail} className="thumbnail" alt="Poster"></img>
        </div>
        <div className="col-md-8">
          <h2 className="mb-4">{book.title}</h2>
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Author:</strong> {book.authors}
            </li>
            <li className="list-group-item">
              <strong>Publisher:</strong> {book.publisher}
            </li>
            <li className="list-group-item">
              <strong>Published Date:</strong> {book.publishedDate}
            </li>
            <li className="list-group-item">
              <strong>Number of Pages:</strong> {book.pageCount}
            </li>
            <li className="list-group-item">
              <strong>Categories:</strong> {book.categories}
            </li>
            <li className="list-group-item">
              <strong>Language:</strong> {book.language}
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="card card-body bg-dark my-5 text-light">
          <div className="col-md-12">
            <h3>About </h3>
            {book.description}
            <hr />
            <a href={book.previewLink} target="_blank" rel="noopener noreferrer" className="btn btn-danger">
              View on Google Books
            </a>
            <Link to="/" className="btn btn-light">
              Go Back To Search
            </Link>
            
          </div>
        </div>
      </div>
    </div>
    )

    let content = loading ? <Spinner /> : bookInfo;
		return <div>{content}</div>;
	}
}

const mapStateToProps = state => ({
	loading: state.books.loading,
	book: state.books.book,
  poster: state.books.poster
});

export default connect(mapStateToProps, {setLoading, fetchPoster, fetchBook})(Book);
