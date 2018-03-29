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
import About from './About.jsx';

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<BrowserRouter>
					<div>
						<div>
							<Tabs>
								<Tab label="Home" containerElement={<Link to="/"/>} />
								<Tab label="About" containerElement={<Link to="/about"/>} />
								<Tab label="Maps" containerElement={<Link to="/maps"/>} />
								<Tab label="Charts" containerElement={<Link to="/charts"/>} />
							</Tabs>
						</div>
						<div className="page">
							<Route exact path="/" component={Home}/>
							<Route path="/about" component={About}/>
							<Route path="/maps" component={Maps}/>
							<Route path="/charts" component={Charts}/>
						</div>
					</div>
				</BrowserRouter>
			</MuiThemeProvider>
		);
	}
}

export default App;