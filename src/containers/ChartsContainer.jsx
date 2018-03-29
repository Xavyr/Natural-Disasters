import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/actions';
import store from '../store';
import ChartSettings from '../components/ChartSettings.jsx';
import ChartDisplay from '../components/ChartDisplay.jsx';

const mapStateToProps = store => ({
  // Pull desired properties from state object into props
  selectedCountry: store.charts.selectedCountry,
  countryList: store.charts.countryList,
  chartSelections: store.charts.chartSelections
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
          chartSelections={this.props.chartSelections}
        />
        <ChartDisplay />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartsContainer);