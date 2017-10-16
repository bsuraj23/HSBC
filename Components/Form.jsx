//importing all modules required.
import React from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';
import TiTick from 'react-icons/lib/ti/tick';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import Slider from 'material-ui/Slider';
import NumberFormat from 'react-number-format';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import {cyan500} from 'material-ui/styles/colors';
import * as actions  from '../Actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PrintPreview from './PrintPreview.jsx';


class BankForm extends React.Component {
	constructor(props) {
		super(props);
		//initialising State
		this.state ={
			firstName: "",
			firstNameState: true,
			lastNameState: true,
			emailState: true,
			phnNumberState: true,
			secondSlider: 0,
			peselState: true,
			nipState: true,
			submit: false
		}		
	}

	//Function will run on every change event of every input field
	updateField = (event) => {
		let target = event.target;
		let name = target.name;
		let value = target.value;
		this.setState({[name]: value});
		this.validate(name,value);		
	}

	//This function will validate input on every change event of input fields.
	validate = (name,value) => {
		//validation for names
		if (name === "firstName" || name === "lastName") {
			let regex = /^[a-zA-Z]+$/;			
			let result = regex.test(value);
			this.setState({[name+"State"] : result});
		} 
		//validation for e-mail
		else if (name === "email") {
			let regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			let result = regex.test(value);
			this.setState({[name+"State"] : result});
		} 
		//validation for phone number
		else if (name === "phnNumber") {
			let regex = /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/;
			let result = regex.test(value);
			this.setState({[name+"State"] : result});
		} 
		//validation for PESEL Number
		else if (name === "pesel") {
			let regex = /[0-9]{4}[0-3]{1}[0-9}{1}[0-9]{5}/;
			let result = regex.test(value);
			this.setState({[name+"State"] : result});			
		} 
		//validation for NIP Number
		else if (name === "nip") {
			let regex = /^((\d{3}[- ]\d{3}[- ]\d{2}[- ]\d{2})|(\d{3}[- ]\d{2}[- ]\d{2}[- ]\d{3}))$/;
			let result = regex.test(value);
			this.setState({[name+"State"] : result});			
		}
	}

	//This function will handle change event for Slider and will set its value in state.
	handleSlider = (event, value) => {
    	this.setState({secondSlider: value});
 	}

 	//This function will handle change event for Date Picker and will set its value in state.
 	handleDateChange = (event, date) => {
	    this.setState({
	      controlledDate: date,
	   });
  	}

  	//This function will decide weather or not enable the submit button.
  	//The button will be enabled only if all the input fields are filled and valid.
	isEnable = () => {
		return !(
				this.state.lastNameState &&
				this.state.firstNameState &&
				this.state.phnNumberState &&
				this.state.nipState &&
				this.state.peselState &&
				this.state.secondSlider &&
				this.state.controlledDate
			);
			
	}

	//This function handles the submit action.
	handleSubmit = (e) => {		
		let payload = {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			nip: this.state.nip,
			pesel: this.state.pesel,
			phnNumber: this.state.phnNumber,
			secondSlider: this.state.secondSlider,
			email: this.state.email,
			controlledDate: this.state.controlledDate
		}

		//Dispatching Action
		this.props.actions.AddData(payload);
		//Two way function binding. Sending data to parent component.
		this.props.onSubmit(true);
		//Calling reset function.
		this.handleReset();		
	}

	//This will reset the form.
	handleReset = () => {
		this.setState ({
			firstName: '',
			lastName: '',
			nip: '',
			pesel: '',
			phnNumber: '',
			secondSlider: '',
			email: '',
			controlledDate: ''
		});
	}

	render(){
		return(
			<div>											
					<div style={{padding: '20px' ,  margin: '20px'}}>
					  	<div>
							<TextField
		     					 hintText="First Name"
		     					 onChange={this.updateField}
		     					 name="firstName"
		     					 errorText={ this.state.firstNameState ? "" : "Please enter only characters!"}
		     					 errorStyle={styles.errorStyle}
		     					 maxLength="20"
		     					 floatingLabelText="First Name"
      							 floatingLabelFixed={true}
      							 value={this.state.firstName}
		    				/>
		    				<span style={{visibility: (this.state.firstNameState && this.state.firstName) ? 'visible' : 'hidden' , display: "inline"}}><TiTick /></span>
	    				</div>
	    				<div>
		    				<TextField
		     					 hintText="Last Name"
		     					 onChange={this.updateField}
		     					 name="lastName"
		     					 errorText={ this.state.lastNameState ? "" : "Please enter only characters!"}
		     					 errorStyle={styles.errorStyle}
		     					 maxLength="20"
		     					 floatingLabelText="Last Name"
      							 floatingLabelFixed={true}
      							 value={this.state.lastName}
		    				/>
		    				<span style={{visibility: (this.state.lastNameState && this.state.lastName) ? 'visible' : 'hidden' , display: "inline"}}><TiTick /></span>		    				
	    				</div>
	    				<div>
		    				<TextField
		     					 hintText="Email Id"
		     					 onChange={this.updateField}
		     					 name="email"
		     					 errorText={ this.state.emailState ? "" : "Please enter correct email id"}
		     					 errorStyle={styles.errorStyle}
		     					 floatingLabelText="Email Id"
      							 floatingLabelFixed={true}
      							 value={this.state.email}
		    				/>
		    				<span style={{visibility: (this.state.emailState && this.state.email) ? 'visible' : 'hidden' , display: "inline"}}><TiTick /></span>		    				
	    				</div>
	    				<div>
		    				<TextField
		     					 hintText="Phnone Number"
		     					 onChange={this.updateField}
		     					 name="phnNumber"
		     					 errorText={ this.state.phnNumberState ? "" : "Please enter 10 digit number"}
		     					 errorStyle={styles.errorStyle}
		     					 maxLength="10"
		     					 floatingLabelText="Phnone Number"
      							 floatingLabelFixed={true}
      							 value={this.state.phnNumber}		     					 
		    				/>
		    				<span style={{visibility: (this.state.phnNumberState && this.state.phnNumber) ? 'visible' : 'hidden' , display: "inline"}}><TiTick /></span>		    				
	    				</div>
	    				<div>
	    					<p style={{color: '#1E90FF'}}>Please Enter Annual Income</p>
	    				</div>
	    				<div>
	    					<Slider
					          min={0}
					          max={100000}
					          step={500}
					          value={this.state.secondSlider}
					          onChange={this.handleSlider}
					          style= {styles.slider}
					        />
					        <NumberFormat value={this.state.secondSlider} displayType={'text'} thousandSeparator={true} prefix={'$'} />
	    				</div>
	    				<div>
		    				<TextField
		     					 hintText="Pesel Number"
		     					 onChange={this.updateField}
		     					 name="pesel"
		     					 errorText={ this.state.peselState ? "" : "Please enter 10 digit number"}
		     					 errorStyle={styles.errorStyle}
		     					 maxLength="11"
		     					 floatingLabelText="Pesel Number (eg .44051401458)"
      							 floatingLabelFixed={true}
      							 value={this.state.pesel}		     					 
		    				/>
		    				<span style={{visibility: (this.state.peselState && this.state.pesel) ? 'visible' : 'hidden' , display: "inline"}}><TiTick /></span>		    				
	    				</div>
	    				<div>
		    				<TextField
		     					 hintText="NIP Number"
		     					 onChange={this.updateField}
		     					 name="nip"
		     					 errorText={ this.state.nipState ? "" : "Please enter 10 digit number"}
		     					 errorStyle={styles.errorStyle}
		     					 floatingLabelText="NIP Number (eg. 222-222-22-22)"
      							 floatingLabelFixed={true}
      							 value={this.state.nip}
		    				/>
		    				<span style={{visibility: (this.state.nipState && this.state.nip) ? 'visible' : 'hidden' , display: "inline"}}><TiTick /></span>		    						    				
	    				</div>
	    				<div>	    				
	    					<DatePicker
						        hintText="Date of Birth"
						        name="date"
						        value={this.state.controlledDate}
						        onChange={this.handleDateChange}
						        floatingLabelText="Date of Birth"
						        floatingLabelFixed={true}
						        autoOk={true}
						      />						      
	    				</div>
	    				<div>	    			
	    					<RaisedButton 
		    					label="Submit" 
		    					disabled={this.isEnable()} 
		    					secondary={true}
		    					onClick={this.handleSubmit}
	    					/>
	    				</div>	    				
	    			</div>
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
  errorStyle: {
    float: "left"
  },
	paper: {
	  height: '100%',
      width: '35%',
	  marginLeft: '450px',
	  textAlign: 'center',
	  display: 'inline-block',
	},
	slider: {
		userSelect: 'none',
	    cursor: 'default',
	    height: '18px',
	    width: '100%',
	    position: 'relative',
	    marginTop: '24px',
	    marginBottom: '5px'
	}
};
const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  }
});