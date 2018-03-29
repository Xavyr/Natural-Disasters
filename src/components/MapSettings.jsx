import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import TimeSlider from './settings/TimeSlider.jsx';
import DisasterType from './settings/DisasterType.jsx';
import DisasterStats from './settings/DisasterStats.jsx';

const paperStyle = {
  margin: 20,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const MapSettings = (props) => {
  return (
    <Paper style={paperStyle} zDepth={1} className="settings">
      <TextField hintText="Country" fullWidth={true} />
      <DisasterType />
      <DisasterStats />
      <TimeSlider />
    </Paper>
  );
};

export default MapSettings;