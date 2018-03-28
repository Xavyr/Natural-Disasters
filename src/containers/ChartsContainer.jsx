import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import ChartSettings from '../components/ChartSettings.jsx';

const mapStateToProps = store => ({
  // Pull desired properties from state object into props
});

const mapDispatchToProps = dispatch => ({
  // Dispatch actions 
});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div>
        <ChartSettings />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);