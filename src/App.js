import React, { Component } from "react";
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import "./App.css";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/home/Landing";
import Book from "../src/components/home/Book";
import Footer from "./components/layout/Footer";

import store from "./store";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div>
					<Navbar />
					<Route exact path="/" component={Landing} />
					<Route exact path="/book/:id" component={Book} />
					<Footer />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
