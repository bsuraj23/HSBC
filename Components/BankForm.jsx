//importing all modules required.
import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
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

	//Function will be sent to child component as a prop to determine 
	//if submit button is clicked or not.
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

export default BankForm; 


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