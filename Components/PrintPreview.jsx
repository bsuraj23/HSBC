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
		return(
				<div id ="printPage">
		
				<MuiThemeProvider>				
					<List>
				      <ListItem primaryText={this.props.data.data.firstName} leftIcon={<ActionGrade />} />
				      <ListItem primaryText={this.props.data.data.lastName} leftIcon={<ActionGrade />} />
				      <ListItem primaryText={this.props.data.data.phnNumber} leftIcon={<ActionGrade />} />
				      <ListItem primaryText={this.props.data.data.email} leftIcon={<ActionGrade />} />
				      <ListItem primaryText={this.props.data.data.nip} leftIcon={<ActionGrade />} />				      
				      <ListItem primaryText={this.props.data.data.pesel} leftIcon={<ActionGrade />} />				      
				      <ListItem primaryText={this.props.data.data.secondSlider} leftIcon={<ActionGrade />} />				      
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
