import React, { Component } from 'react'
import Logo from './Logo';

export default class Header extends Component {
	constructor(context) {
		super(context);
		this.state = {};
	}

	render() {
		return (
			<div id="head">
	          <Logo/>
	        </div>
          )
	}
}