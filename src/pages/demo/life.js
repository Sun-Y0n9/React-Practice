import React, { Component } from 'react';
import Child from './Child.js';
import './life.css';
class Life extends Component {
	constructor (props) {
		super(props);
		this.state = {
			count: 10
		}
		this.handleClickButtonMethod1 = this.handleClickButtonMethod1.bind(this);
	}
	render () {
		// console.log('life render');
		return (
			<div className='life'>
				<div>Count {this.state.count}</div>
				<div>
					<button onClick={this.handleClickButtonMethod1}>增加</button>
					<button onClick={this.handleClickButtonMethod2.bind(this)}>增加</button>
					<button onClick={this.handleClickButtonMethod3}>增加</button>
				</div>
				<Child count={this.state.count}></Child>
			</div>
		)
	}
	handleClickButtonMethod1 () {
		let { count } = this.state;
		this.setState({
			count: count + 19
		})
	}
	handleClickButtonMethod2 () {
		let { count } = this.state;
		this.setState({
			count: count + 29
		})
	}
	handleClickButtonMethod3 = () => {
		let { count } = this.state;
		this.setState({
			count: count + 100
		})
	}
};
export default Life;