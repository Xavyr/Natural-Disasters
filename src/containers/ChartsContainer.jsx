import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import store from '../store';
//import { LineChart, Line } from 'recharts';
import axios from 'axios';
import ChartSettings from '../components/ChartSettings.jsx';
import ChartDisplay from '../components/ChartDisplay.jsx';

const mapStateToProps = store => ({
  // Pull desired properties from state object into props
  selectedCountry: store.charts.selectedCountry,
	selectedCountryData: store.charts.selectedCountryData,
  countryList: store.charts.countryList,
  chartSelections: store.charts.chartSelections
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);


class ChartsContainer extends Component {
  constructor(props) {
	  super(props);
	  this.state = {
		  data: "hello"
	  };

	  this.inputDataToState = this.inputDataToState.bind(this);
	  this.countryDeathAndDisasterType = this.countryDeathAndDisasterType.bind(this);
  }

	inputDataToState(data) {
	  let stateCopy = this.state;
	  stateCopy.data = data;
	  this.setState(stateCopy);
	}

	countryDeathAndDisasterType(countryName, disasterTypeId) {
		// const increaseLikes = `
		// 	query{
		//   disastersByCountryNameDisasterTypeId(countryName:"${countryName}", disasterTypeId:${disasterTypeId}) {
		//     id
		//     events
		//     deaths
		//     timeRange
		//     timeRangeId
		//   }
		// }
		// `;
		// fetch('http://localhost:3000/graphql', {
		// 	method: 'POST',
		// 	headers: { 'Content-Type': 'application/json' },
		// 	body: JSON.stringify({
		// 		query: increaseLikes,
		// 	}),
		// })
		// 	.then(res => {
		// 		console.log("this", this);
		// 		this.inputDataToState(res.json());
		// 	})
	}


	componentDidMount() {

	}


  render() {
  	//this.countryDeathAndDisasterType("Chile", 1);
	  console.log(JSON.stringify(this.props.selectedCountryData))
    return(
      <div className="container">
        <ChartSettings 
          countryList={this.props.countryList} 
          changeCountry={this.props.changeCountry}
          changeCountryData={this.props.changeCountryData}
          chartSelections={this.props.chartSelections}
        />
        <ChartDisplay
	        selectedCountry={this.props.selectedCountry}
	        selectedCountryData={this.props.selectedCountryData}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartsContainer);