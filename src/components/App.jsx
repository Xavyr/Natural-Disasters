import React from 'react';
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
		return <BrowserRouter>
			<div>
				<ul>
					<button><Link to="/">Home</Link></button>
					<button><Link to="/about">About</Link></button>
					<button><Link to="/charts">Charts</Link></button>
					<button><Link to="/maps">Maps</Link></button>
				</ul>

				<hr/>

				<Route exact path="/" component={Home}/>
				<Route path="/about" component={About}/>
				<Route path="/maps" component={Maps}/>
				<Route path="/charts" component={Charts}/>
			</div>
		</BrowserRouter>
	}
}

export default App;