import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './app.js'

  ReactDOM.render(
    <AppContainer>
      <App/>
    </AppContainer>,
    document.getElementById('root')
  );

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./app', () => {
    const NewRoot = require('./app').default;
    ReactDOM.render(
      <AppContainer>
        <NewRoot /> 
      </AppContainer>,
      document.getElementById('root')
    );
  });
}