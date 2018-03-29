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

const handleNewRequest = (inputVal, props) => {
	props.changeCountry(inputVal);
	const queryString = `
					query{
				  disastersByCountryName(countryName:"Chile") {
				    id
				    events
				    deaths
				    timeRange
				    timeRangeId
				    disasterType
				  }
				}
		    `;
	fetch('http://localhost:3000/graphql', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			query: queryString,
		}),
	})
	.then(res => res.json())
	.then(result => {
		props.changeCountryData(result.data);
	});
};


const ChartSettings = props => {
  return (
    <Paper style={paperStyle} zDepth={1} className="settings">
      <AutoComplete 
        hintText="Country" 
        dataSource={props.countryList}
        onNewRequest={inputVal => handleNewRequest(inputVal, props)}
      />
      <DisasterType />
      {/* <DisasterStats /> */}
    </Paper>
  );
};

export default ChartSettings;