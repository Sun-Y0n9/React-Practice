import React, { Component } from 'react';
import { HashRouter, Link, Route } from 'react-router-dom';
import Main from './Main';
import About from './About';
import Topic from './Topic';
class Home extends Component {
	render () {
		return (
			<HashRouter>
				<div>
					<h1>路由栗子</h1>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>about</Link>
						</li>
						<li>
							<Link to='/topic'>topic</Link>
						</li>
					</ul>
					<hr />
					<Route exact path='/' component={Main} />
					<Route exact path='/about' component={About} />
					<Route exact path='/topic' component={Topic} />
				</div>
			</HashRouter>
		);
	}
}

export default Home;