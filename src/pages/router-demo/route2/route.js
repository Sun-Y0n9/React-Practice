import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Main from './Main';
import About from './About';
import Topic from './Topic';
import Home from './home';
class Irouter extends Component {
	render () {
		return (
			<HashRouter>
				<Home>
					{/* <Route path='/main' component={Main} /> */}
					<Route path='/main' render={() => 
						<Main>
							<Route path='/main/about' component={About} />
						</Main>
					} />
					<Route path='/about' component={About} />
					<Route path='/topic' component={Topic} />
				</Home>
			</HashRouter>
		)
	}
}

export default Irouter;