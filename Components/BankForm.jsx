import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import * as actions  from '../Actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PrintPreview from './PrintPreview.jsx';
import Form from './Form.jsx';
import {cyan500} from 'material-ui/styles/colors';

class BankForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {			
			submit: false
		}		
	}

	onSubmit = (value) => {
		this.setState({
			submit: value
		});
	}


	render(){
		return(
			<div>				
				<MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
				<Paper style={styles.paper} zDepth={5}>
				<h1 style={{textAlign: 'center'}}>Survey</h1>
				{!this.state.submit ?
					<Form 
						onSubmit={this.onSubmit}
					/>
					: <PrintPreview />}
	    		</Paper>
				</MuiThemeProvider>
			</div>
			);
	}
}

function mapStateToProps(state) {
	return {
		data: state.data	
	};
}


function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(BankForm); 


const styles = {
	paper: {
	  height: '100%',
      width: '35%',
	  marginLeft: '450px',
	  textAlign: 'center',
	  display: 'inline-block',
	}
};
const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  }
});