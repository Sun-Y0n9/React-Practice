import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Main from './Main';
import About from './About';
import Topic from './Topic';
import Home from './home';
import NoMatch from './NoMatch';
class Irouter extends Component {
	render () {
		return (
			<HashRouter>
				<Home>
					<Switch>
						{/* <Route path='/main' component={Main} /> */}
						<Route path='/main' render={() => 
							<Main>
								<Route path='/main/:mainId' component={About} />
							</Main>
						} />
						<Route path='/about' component={About} />
						<Route path='/topic' component={Topic} />
						<Route component={NoMatch} />
					</Switch>
				</Home>
			</HashRouter>
		)
	}
};

export default Irouter;