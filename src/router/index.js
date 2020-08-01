import React, { Component } from 'react';
import { HashRouter, Route, Switch} from 'react-router-dom';
import menuList from '../config/menu.js';
import App from '../App.js';
import Admin from '../admin';
import Login from '../pages/login/index.js';
import Buttons from '../pages/ui/buttons/index.js';
import F0f from '../pages/404/index.js';
console.log(menuList);
class TGLRouter extends Component {
	render () {
		return (
			<HashRouter>
				<App>
					<Route path='/login' component={Login} />
					<Route path='/admin' render={() => 
						<Admin>
							<Switch>
								<Route path='/admin/ui/buttons' component={Buttons} />
								<Route component={F0f} />
							</Switch>
						</Admin>
					} />
				</App>
			</HashRouter>
		);
	}
}

export default TGLRouter;