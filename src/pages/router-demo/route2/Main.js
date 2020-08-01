import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Main extends Component{
	render () {
		return (
			<div>
				<h2>Main</h2>
				<hr />
				<Link to='/main/about'>加载About路由内容</Link>
				{this.props.children}
			</div>
		);
	}
}

export default Main;