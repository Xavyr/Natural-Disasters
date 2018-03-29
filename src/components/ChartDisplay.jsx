import React from 'react';
import { 
  BarChart, 
  Bar, 
  CartesianGrid, 
  XAxis, 
  YAxis,
  Tooltip,
  Legend
} from 'recharts';

const ChartDisplay = props => {
  // console.log('Selected country data', JSON.stringify(props.selectedCountryData, null, 2));
  let BarCharts;
  if (props.selectedCountryData) {
    // console.log('HAYYY INSIDE IF BLOCK', props.selectedCountry);
    BarCharts = Object.keys(props.selectedCountryData)
    .filter(key => props.disasterTypes[key])
    .map((disasterType, i) => (
      <div key={i}>
        <h3>{disasterType.toUpperCase()}</h3>
        <BarChart width={500} height={250} data={props.selectedCountryData[disasterType]}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="decade" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Occurrences" fill="#8884d8" />
          <Bar dataKey="Total Deaths" fill="#ffc658" />
        </BarChart>
      </div>
    )); 
  }

  return (
    <div className="display">
      <h2>{props.selectedCountry}</h2>
      {BarCharts}
    </div>
  );
};

/*
<div>    
  <BarChart width={730} height={250} data={data.geophysical}>
    <CartesianGrid strokeDasharray="4 4" />
    <XAxis dataKey="decade" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="Occurrences" fill="#8884d8" />
    <Bar dataKey="Total Deaths" fill="#82ca9d" />
    <Bar dataKey="Persons Affected" fill="#ffc658" />
  </BarChart>
</div>
*/
export default ChartDisplay;