import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import Paper from 'material-ui/Paper';

import DisasterType from './settings/DisasterType.jsx';
import DisasterStats from './settings/DisasterStats.jsx';

const paperStyle = {
  margin: 20,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const ChartSettings = props => {
  return (
    <Paper style={paperStyle} zDepth={1} className="settings">
      <AutoComplete 
        hintText="Country" 
        dataSource={props.countryList}
        onNewRequest={props.changeCountry}
      />
      <DisasterType />
      {/* <DisasterStats /> */}
    </Paper>
  );
};

export default ChartSettings;