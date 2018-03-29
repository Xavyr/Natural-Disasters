import * as types from '../constants/actionTypes';
import countryList from '../constants/countryList'

const initialState = {
  // Initialize state here
  selectedCountry: null,
	selectCountryData: null,
  countryList,  // TODO: Populate country list from GET request to database
  chartSelections: {
    disasterType: {
      climatological: true,
      geophysical: true,
      hydrological: true,
      meteorological: true
    }
  }
};

const chartsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add cases for different action types, returning updated state
	  case types.CHANGE_COUNTRY: {
		  const disasterString = `
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
				  query: disasterString,
			  }),
		  })
			  .then(res => res.json()).then(result => {
			  	let data = result.data;
			  	console.log('action', action);
			  })
		  return {
			  ...state,
			  selectedCountry: action.payload,
			  //selectedCountryData: "hello"
		  };

	  }

    default: 
      return state;
  }
};

export default chartsReducer;
