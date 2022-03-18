import { showLoading, hideLoading } from 'react-redux-loading-bar';

const LOAD_RANDOM_GREETING = 'greetings/random';

const getRandomGreeting = async () => {
  const response = await fetch('https://kambelis.herokuapp.com/api/greeting');

  return response.json();
};

export const loadRandomGreeting = (payload) => ({
  type: LOAD_RANDOM_GREETING,
  payload,
});

export const fetchRandomGreeting = () => async (dispatch) => {
  dispatch(showLoading());

  const data = await getRandomGreeting();
  dispatch(loadRandomGreeting(data));

  dispatch(hideLoading());
};

const initialState = {
  message: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_RANDOM_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;