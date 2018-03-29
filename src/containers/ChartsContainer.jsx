import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import store from '../store';
import ChartSettings from '../components/ChartSettings.jsx';
import ChartDisplay from '../components/ChartDisplay.jsx';

const mapStateToProps = store => ({
  selectedCountry: store.charts.selectedCountry,
	selectedCountryData: store.charts.selectedCountryData,
  countryList: store.charts.countryList,
  disasterTypes: store.charts.disasterTypes
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

class ChartsContainer extends Component {
  constructor(props) {
	  super(props);
  }

  render() {
    return(
      <div className="container">
        <ChartSettings 
          countryList={this.props.countryList} 
          changeCountry={this.props.changeCountry}
          changeCountryData={this.props.changeCountryData}
          disasterTypes={this.props.disasterTypes}
          chartSelections={this.props.chartSelections}
        />
        <ChartDisplay
	        selectedCountry={this.props.selectedCountry}
          selectedCountryData={this.props.selectedCountryData}
          disasterTypes={this.props.disasterTypes}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartsContainer);