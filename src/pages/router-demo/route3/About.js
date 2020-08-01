import React, { Component } from 'react';

class About extends Component {
	render () {
		return (
			<div>
				<h2>About</h2>
				{this.props.match.params.mainId}
			</div>
		);
	}
}

export default About;