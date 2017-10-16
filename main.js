//importing all modules required.
import React from 'react';
import ReactDOM from 'react-dom';
import BankForm from './Components/BankForm.jsx';
import PrintPreview from './Components/PrintPreview.jsx';
var {Provider} = require('react-redux');
var store = require('./Store').configure();
import { Router, Route, browserHistory } from 'react-router';


ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory}>
	      <Route path="/" component={BankForm}>
	      	<Route path="/page" component={PrintPreview} />
	      </Route>
	    </Router> 	
  	</Provider>
, document.getElementById('app'));
