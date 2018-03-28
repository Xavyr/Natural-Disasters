import React from 'react';
import Toggle from 'material-ui/Toggle';

const styles = {
  block: {
    maxWidth: 200,
  },
  toggle: {
    marginBottom: 5,
  },
};

const DisasterStats = (props) => (
  <div>
    <h4>Disaster Stats</h4>
    <div style={styles.block}>
      <Toggle
        label="Occurrence"
        defaultToggled={true}
        labelPosition="right"
        style={styles.toggle}
      />
      <Toggle
        label="Total Deaths"
        defaultToggled={true}
        labelPosition="right"
        style={styles.toggle}
      />
      <Toggle
        label="Persons Affected"
        defaultToggled={true}
        labelPosition="right"
        style={styles.toggle}
      />
    </div>
  </div>
);

export default DisasterStats;