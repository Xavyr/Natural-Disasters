import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';


const paperStyle = {
  margin: 20,
  padding: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const MapSettings = (props) => {
  return (
    <Paper style={paperStyle} zDepth={1}>
      <TextField hintText="Country" fullWidth={true} />

    </Paper>
  );
};

export default MapSettings;