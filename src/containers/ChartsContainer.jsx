import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
//import { LineChart, Line } from 'recharts';
import axios from 'axios';
import ChartSettings from '../components/ChartSettings.jsx';
import ReactChartkick, { LineChart, PieChart, ScatterChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart);

const mapStateToProps = store => ({
  // Pull desired properties from state object into props
});

const mapDispatchToProps = dispatch => ({
  // Dispatch actions 
});


class ChartsContainer extends Component {
  constructor(props) {
	  super(props);
	  this.state = {
		  data: "hello"
	  };

	  this.inputDataToState = this.inputDataToState.bind(this);
  }

	inputDataToState(data) {
	  let stateCopy = this.state;
	  stateCopy.data = data;
	  this.setState(stateCopy);
	}

	componentDidMount() {
  	let that = this;
		axios.get('http://localhost:3000/getDisasters')
			.then(function (response) {
				that.inputDataToState(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}

  render() {
  	console.log(this.state);
    return(
      <div>
        <ChartSettings />
	      <LineChart data={{"2017-01-01": 11, "2017-01-02": 6}} />
	      <PieChart data={[["Blueberry", 44], ["Strawberry", 23]]} />
	      <ScatterChart data={[[174.0, 80.0], [176.5, 82.3]]} xtitle="Size" ytitle="Population" />

      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartsContainer);