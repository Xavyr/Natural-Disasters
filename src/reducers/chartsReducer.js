import * as types from '../constants/actionTypes';
import countryList from '../constants/countryList'

const initialState = {
  // Initialize state here
  selectedCountry: null,
	selectCountryData: null,
  countryList,  // TODO: Populate country list from GET request to database
  disasterTypes: {
    Climatological: true,
    Geophysical: true,
    Hydrological: true,
    Meteorological: true
  }
};

const chartsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Add cases for different action types, returning updated state
	  case types.CHANGE_COUNTRY:
		  return {
			  ...state,
			  selectedCountry: action.payload,
			  //selectedCountryData: "hello"
		  };
	  case types.CHANGE_COUNTRY_DATA: {
		  const selectedCountryData = {
        Climatological: [],
        Geophysical: [],
        Hydrological: [],
        Meteorological: [],
      };

      action.payload.disastersByCountryName.forEach(
        dataPoint => {
          selectedCountryData[dataPoint.disasterType].push({
            decade: dataPoint.timeRange,
            Occurrences: dataPoint.events,
            "Total Deaths": dataPoint.deaths
          });
        }
      );

	  	return {
			  ...state,
			  selectedCountryData
		  }
	  }
    default: 
      return state;
  }
};

export default chartsReducer;
