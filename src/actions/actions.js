import * as types from '../constants/actionTypes';

export const changeCountry = (inputVal) => ({
  type: types.CHANGE_COUNTRY,
  payload: inputVal
});

