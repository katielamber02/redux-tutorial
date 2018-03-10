import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducer';
import ReduxPromise from 'redux-promise'

const createStoreWithMiddleware=applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
   <Provider store={createStoreWithMiddleware(rootReducer)}>
      <App />
   </Provider>,
 document.getElementById('root'));
registerServiceWorker();
