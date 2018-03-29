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

const chartSelections = {
  climatological: true,
  geophysical: true,
  hydrological: true,
  meteorological: true
};

const data = {
  climatological: [
    {decade: '1987-1006', Occurrences: 3, "Total Deaths": 0, "Persons Affected": 0 },
    {decade: '1997-2006', Occurrences: 4, "Total Deaths": 10, "Persons Affected": 300 },
    {decade: '2007-2016', Occurrences: 5, "Total Deaths": 21, "Persons Affected": 10900 }
  ],
  geophysical: [
    {decade: '1987-1006', Occurrences: 5, "Total Deaths": 14, "Persons Affected": 72495 },
    {decade: '1997-2006', Occurrences: 2, "Total Deaths": 19, "Persons Affected": 80743 },
    {decade: '2007-2016', Occurrences: 10, "Total Deaths": 600, "Persons Affected": 3934994 }
  ],
  hydrological: [
    {decade: '1987-1006', Occurrences: 8, "Total Deaths": 458, "Persons Affected": 285981 },
    {decade: '1997-2006', Occurrences: 13, "Total Deaths": 87, "Persons Affected":  607878 },
    {decade: '2007-2016', Occurrences: 7, "Total Deaths": 199, "Persons Affected": 355707 }
  ],
  meteorological: [
    {decade: '1987-1006', Occurrences: 3, "Total Deaths": 2, "Persons Affected": 48000 },
    {decade: '1997-2006', Occurrences: 7, "Total Deaths": 51, "Persons Affected": 29762 },
    {decade: '2007-2016', Occurrences: 6, "Total Deaths": 12, "Persons Affected": 52038 }
  ]
};

const ChartDisplay = props => {
	console.log('props inside of chartDisplay',props);
  const BarCharts = Object.keys(chartSelections)
    .filter(key => chartSelections[key])
    .map((disasterType, i) => (
      <div key={i}>
        <h3>{disasterType.toUpperCase()}</h3>
        <BarChart width={500} height={250} data={data[disasterType]}>
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