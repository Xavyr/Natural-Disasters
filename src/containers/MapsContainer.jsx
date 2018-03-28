import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';

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
      <div className="container">
        <h1>Coming Soon... Massive Disaster</h1>
        <p>Dummy state test: {this.props.dummyState}</p>
        {/* ADD COMPONENTS */}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);