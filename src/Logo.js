import React, { Component } from 'react'

export default class Logo extends Component {
	constructor(context) {
		super(context);
	}

	render() {
		return (
			<div className="logo">
				<span className="logo-head">Uber</span>
				<span className="logo-bot">IUTS</span>
			</div>
		)
	}
}
