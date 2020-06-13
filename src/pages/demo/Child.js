import React, { PureComponent } from 'react';

export default class Child extends PureComponent {
	componentWillMount () {
		console.log('componentWillMount');
	}
	componentDidMount () {
		console.log('componentDidMount');
	}
	componentWillUpdate () {
		console.log('componentWillUpdate');
	}
	shouldComponentUpdate () {
		console.log('shouldComponentUpdate');
		return true;
	}
	componentDidUpdate () {
		console.log('componentDidUpdate');
	}
	componentWillReceiveProps () {
		console.log('componentWillReceiveProps');
	}
	render () {
		// console.log('child render');
		return (
			<div>
				{this.props.count}
			</div>
		)
	}
};