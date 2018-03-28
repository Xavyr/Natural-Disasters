import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import MapSettings from '../components/MapSettings.jsx';

const mapStateToProps = store => ({
  // Pull desired properties from state object into props
  dummyState: store.mapsReducer.dummyState
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
        <MapSettings />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);