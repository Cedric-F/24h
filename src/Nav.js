import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Logo extends Component {
	constructor(context) {
		super(context);
	}

	render() {
		return (
			<div id="nav">
				<Link to="Home">
				<Link to="About">
			</div>
		);
	}
}