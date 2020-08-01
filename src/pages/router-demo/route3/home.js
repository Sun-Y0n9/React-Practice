import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
	render () {
		return (
			<div>
				<h1>路由栗子</h1>
				<ul>
					<li>
						<Link to='/main'>main</Link>
					</li>
					<li>
						<Link to='/about'>about</Link>
					</li>
					<li>
						<Link to='/topic'>topic</Link>
					</li>
					<li>
						<Link to='/imooc'>imooc</Link>
					</li>
				</ul>
				<hr />
				<div style={{background: 'aqua'}}>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Home;