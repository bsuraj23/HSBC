//This will create a store to keep data.
var redux = require('redux');
import DataReducer from '../Reducers';
import { createStore, combineReducers } from 'redux';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    data: DataReducer    
  });

  var store = redux.createStore(reducer, initialState ,redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};


