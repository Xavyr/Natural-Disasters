import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

import {
	BrowserRouter,
	Route,
	Link,
	Switch,
	Redirect
} from 'react-router-dom'
import PropTypes from "prop-types";
import Home from './Home.jsx';
import Maps from './Maps.jsx';
import Charts from './Charts.jsx';

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<BrowserRouter>
					<div>
						<div>
							<Tabs>
								<Tab label="Home" containerElement={<Link to="/"/>} />
								<Tab label="Charts" containerElement={<Link to="/charts"/>} />
								<Tab label="Maps" containerElement={<Link to="/maps"/>} />
							</Tabs>
						</div>
						<div className="page">
							<Route exact path="/" component={Home}/>
							<Route path="/charts" component={Charts}/>
							<Route path="/maps" component={Maps}/>
						</div>
					</div>
				</BrowserRouter>
			</MuiThemeProvider>
		);
	}
}

export default App;