import React, { Component } from 'react'
import Logo from './Logo';

export default class Landing extends Component {
	constructor(context) {
		super(context);
	}

	render() {
		return (
			<div id="landing">
				<h1>Le réseau des IUTs Informatique vous présente</h1>
				<Logo />
				<p>Le 1er réseau de livraison écologique de france.</p>
				<p>À l'aide d'une Intelligence Artificielle avancée, nous trouvons les restaurants les plus proches de chez vous, et nos coursiers sont vraiment des cyclistes.</p>
				<div class="city"></div>
			</div>
		)
	}
}