import ADD_DATA from '../constants/action-types';

const initialState = {
  payload: [],
};

const rootReduer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return { ...state, payload: [...state.payload, ...action.payload] };
    default:
      return state;
  }
};

export default rootReduer;
