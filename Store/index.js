//This will create a store to keep data.
// This also adds extension for Redux developer tool.
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


