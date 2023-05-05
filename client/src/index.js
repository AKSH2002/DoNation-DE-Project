import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';


import App from './App';

const store = createStore(reducers,compose(applyMiddleware(thunk)))
// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );

const container = document.getElementById("root");
const rootContainer = ReactDOM.createRoot(container);
rootContainer.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();