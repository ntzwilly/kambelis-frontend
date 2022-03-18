import React from 'react';

import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';

import LoadingBar from 'react-redux-loading-bar';

import { Provider } from 'react-redux';

import Greeting from './components/Greeting';

import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <Router key="1">
      <LoadingBar key="2" />
      <Routes key="3">
        <Route key="4" exact path="/" element={<Greeting />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;