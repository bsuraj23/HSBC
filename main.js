//importing all modules required.
import React from 'react';
import ReactDOM from 'react-dom';
import BankForm from './Components/BankForm.jsx';
var {Provider} = require('react-redux');
var store = require('./Store').configure();


//This will render the base component
//Provider provides the redux store to all the components.
ReactDOM.render(
	<Provider store={store}>
		<BankForm />
	</Provider>
, document.getElementById('app'));
