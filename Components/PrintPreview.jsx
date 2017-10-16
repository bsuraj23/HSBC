//importing all modules required.
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as actions  from '../Actions';

//This component will print the list of all the data entered by user to print.
class PrintPreview extends React.Component {

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
	    					<button onClick={() => window.print()}>Print</button>
	    				</div>
	    			</p>
				</div>
			);
	}
}

//This will map store state to props
function mapStateToProps(state) {
	return {
		data: state.data	
	};
}

//This will map dispatch to props
function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

//This will connect the component to redux and store.
export default connect(mapStateToProps, mapDispatchToProps)(PrintPreview); 
