import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as actions  from '../Actions';
import RaisedButton from 'material-ui/RaisedButton';

class PrintPreview extends React.Component {
	

	handlePrintDiv = () => {	 
	 window.print();
	}

	render(){
		let storedData = this.props.data.data;
		return(
				<div id ="printPage">
		
				<MuiThemeProvider>				
					<List>
				      <ListItem primaryText={storedData.firstName} leftIcon={<ActionGrade />} />
				      <ListItem primaryText={storedData.lastName} leftIcon={<ActionGrade />} />
				      <ListItem primaryText={storedData.phnNumber} leftIcon={<ActionGrade />} />
				      <ListItem primaryText={storedData.email} leftIcon={<ActionGrade />} />
				      <ListItem primaryText={storedData.nip} leftIcon={<ActionGrade />} />				      
				      <ListItem primaryText={storedData.pesel} leftIcon={<ActionGrade />} />				      
				      <ListItem primaryText={storedData.secondSlider} leftIcon={<ActionGrade />} />				      
				    </List>
				    </MuiThemeProvider>
				    <p>
	    				<div>	    			
	    					<button onClick={this.handlePrintDiv}>Print</button>
	    				</div>
	    			</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(PrintPreview); 
