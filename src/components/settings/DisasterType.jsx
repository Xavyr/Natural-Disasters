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

const DisasterType = (props) => (
  <div>
    <h4>Disaster Classification</h4>
    <div style={styles.block}>
      <Toggle
        label="Climatological"
        defaultToggled={true}
        labelPosition="right"
        style={styles.toggle}
      />
      <Toggle
        label="Geophysical"
        defaultToggled={true}
        labelPosition="right"
        style={styles.toggle}
      />
      <Toggle
        label="Hydrological"
        defaultToggled={true}
        labelPosition="right"
        style={styles.toggle}
      />
      <Toggle
        label="Meteorological"
        defaultToggled={true}
        labelPosition="right"
        style={styles.toggle}
      />
    </div>
  </div>
);

export default DisasterType;