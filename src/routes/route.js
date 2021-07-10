import React from 'react';
import { Route, HashRouter as Router, Switch, Redirect } from 'react-router-dom';
import Home from "../home/home";

const RouteBase = ( ) => {
	return (
		<Router>
			<Switch>
				<Route key={`public-route-home`} path="/" exact>
					<Redirect to="fa-brands"/>
				</Route>
				<Route key={`public-route-styles`} path="/:paramOne">
					<Home/>
				</Route>
			</Switch>
		</Router>
	);
}
export default RouteBase;