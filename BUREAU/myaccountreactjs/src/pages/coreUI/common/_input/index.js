import React, {useEffect, useState,Fragment } from 'react';
import PropTypes        from "prop-types";
import validators       from 'utils/validators';
import "./style/input.scss";

function Input(props){
  	const {
			className	=	"",
			id			=	"",
			name		=	"",
			inputValue	=	"",
			type		=	"text",
			placeholder	=	"",
			labelText   =   "",
			infoText    =   "",
			counter     =   "",
			counterText  =  "",
			maxInputLength=  0,
			autoComplete  = "",
			autoCorrect   = "",
			errorStatus   =  false,
			errorMsg      =  "",
			masked        =  "",
			validationType=  "",
			disabled      = false,
			onChange,
			...rest 
		} = props;

	const [inputState, setInputState] = useState(
		{
			stateValue		: inputValue || "" ,
			errorMsg		: errorMsg || "",
			counterNumber	: inputValue || 0
		}
	);

	useEffect(() => {       
        init();  
     },[errorMsg || inputValue]); 
     
     const init=()=>{
		setInputState({...inputState,
			errorMsg:errorMsg, 
			stateValue:inputValue,
			counterNumber:inputValue.length || 0
		});
     }	

  	const onChangeHandler=(e)=>{ 
		const { value } = e.target;
		let changedValue = value.replace(/^\s+$/g, '');
		let error = validators[validationType](changedValue,name,maxInputLength);

		if (validationType === "pan") {
		  changedValue = changedValue.toUpperCase();
		}

		// remove alphabets 
		validationType === 'unit' ? changedValue = changedValue.replace(/^([a-zA-Z])+$/gi, '') : null;
		
		// remove special chars
		(validationType === 'email' || validationType === 'password' || validationType === 'unit' || validationType === 'date') 
		? null 
		: changedValue = changedValue.replace(/[^\w\s]/gi, '');
		
		// auto add - in date formate 
		(validationType === 'date' || validationType === 'dob' )
		 ? changedValue = changedValue.replace(/^(\d\d)(\d)$/g,"$1-$2").replace(/^(\d\d\-\d\d)(\d+)$/g,"$1-$2").replace(/[^\d\-]/g,'')
		 : null		
       
		// masked 
		masked ? changedValue = validators['masking'](changedValue.replace(/-/gi, ""), masked) : null;

		setInputState({...inputState,errorMsg:error, stateValue: changedValue, counterNumber: value.length });

		onChange(e,error);
 	}
	const noEvent=(e)=>{
			e.preventDefault();
			return false;
		}

	return (
		<div className={`${id} ${infoText ? "infoTextContainer" : ""} ${disabled ? "disabled" : ""} inputContainer`}> 
			{labelText && <label className='labelControl' htmlFor={id}>{`${labelText}`}</label>}      
			<input 
				onChange	=	{(e)=>onChangeHandler(e)} 
				//onBlur      =   {(e)=>onChangeHandler(e)} 
				className	=	{`${className} inputControls pb-input`} 
				type		=	{type}
				placeholder	=	{placeholder} 
				name		=	{name} 
				id			=	{id || name} 
				value		=	{inputState.stateValue} 
				maxLength   =   {maxInputLength? maxInputLength : 55}
				autoComplete=   {autoComplete || 'off'} 
				autoCorrect =   {autoCorrect || "off"}
				onPaste		=	{noEvent} 
				onCopy		=	{noEvent} 
				onCut		=	{noEvent} 
				onDrag		=	{noEvent} 
				onDrop		=	{noEvent} 
				disabled    =   {disabled}				
				{...rest}
			/>
			{(counter || counterText) && <span className='inputCounter'>{counter ? `${inputState.counterNumber} / ${maxInputLength}` : ""} {counterText} </span>}
			{infoText && <div className='infoText'>{infoText}</div>}
			{inputState.errorMsg  && <div className='errorMsg'>{inputState.errorMsg}</div>}
       </div>
	);
}

Input.propTypes = {
	onChange   	:   PropTypes.func,
	type		:	PropTypes.string,
	className	:	PropTypes.string,
	id	        :	PropTypes.string,
	name		:	PropTypes.string,
	inputValue	:	PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
	placeholder :   PropTypes.string,
	labelText   :   PropTypes.string,
	infoText	:   PropTypes.string,
	autoComplete:   PropTypes.string,
	masked      :   PropTypes.string,
	errorMsg    :   PropTypes.oneOfType([ PropTypes.string, PropTypes.bool]),
	counter	    :   PropTypes.bool,
	validationType	:   PropTypes.string,
	counterText     :   PropTypes.string,
	maxInputLength	:   PropTypes.number,
};

export default Input; 
