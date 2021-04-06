import React, { Component } from "react";

import { connect } from 'react-redux';

import { searchBook, fetchBooks, setLoading } from "../../actions/searchActions";

export class SearchForm extends Component {
	onChange = (e) => {
        this.props.searchBook(e.target.value);
    };

	onSubmit = e => {
		e.preventDefault();
		this.props.fetchBooks(this.props.text);
		this.props.setLoading();
	}

	render() {
		return (
			<div className="jumbotron jumbotron-fluid mt-5 text-center">
				<div className="container">
					<h2 className="mb-3">
						📚 Look for your Book here
					</h2>
					<form id="searchForm" onSubmit={this.onSubmit}>
						<input type="text" className="form-control" name="searchText" placeholder="🔍 Search Books..." onChange={this.onChange} />
						<button type="submit" className="btn btn-danger btn-bg mt-3">
							Search
						</button>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
    text: state.books.text
})

export default connect(mapStateToProps, {searchBook, fetchBooks, setLoading})(SearchForm);
