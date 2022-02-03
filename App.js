import React, { useState } from "react";
import validator from 'validator'
import './App.css'

const App = () => {
const [name, setname] = useState('')
const [email, setemail] = useState('')
const [phone, setphone] = useState('')
const [country, setcountry] = useState('')
const [state, setstate] = useState('')
const [postal, setpostal] = useState('')

const vName = (e) => {
	var name = e.target.value
	if (validator.isAlpha(name)) {
	setname('')
	} else {
  	setname('Enter valid Username!')
	}
}
const vEmail = (e) => {
	var email = e.target.value
	if (validator.isEmail(email)) {
	setemail('')
	} else {
	setemail('Enter valid Email!')
	}
}
const vPhone = (e) => {
	var phone = e.target.value
	if (validator.isNumeric(phone)) {
	setphone('')
	} else {
	setphone('Enter valid Phone number!')
	}
}
const vcountry = (e) => {
	var country = e.target.value
	if (validator.isAlpha(country)) {
	setcountry('')
	} else {
	setcountry('Enter valid country name!')
	}
}
const vstate = (e) => {
	var state = e.target.value
	if (validator.isAlpha(state)) {
	setstate('')
	} else {
  	setstate('Enter valid State name!')
	}
}
const vpostal = (e) => {
	var postal = e.target.value
	if (validator.isNumeric(postal)) {
	setpostal('')
	} else {
	setpostal('Enter valid Post code!')
	}
}

return (
	<div style={{margin: 'auto',marginLeft: '20px'}}>

       <center> <h1>FORM VALIDATION</h1></center>

        <span style={{fontWeight: 'bold',color: 'blue',fontSize:'20px'}}>Name: </span>
        <input type="text" id="ibox"
		onChange={(e) => vName(e)}></input>
		<span style={{fontWeight: 'bold',color: 'red',}}>
        {name}&emsp;&emsp;</span>

		<span style={{fontWeight: 'bold',color: 'blue',fontSize:'20px'}}>Email: </span>
        <input type="text" id="ibox"
		onChange={(e) => vEmail(e)}></input> 
		<span style={{fontWeight: 'bold',color: 'red',}}>
        {email}&emsp;&emsp;</span>

        <span style={{fontWeight: 'bold',color: 'blue',fontSize:'20px'}}>Phone number: </span>
        <input type="text" id="ibox"
		onChange={(e) => vPhone(e)}></input> 
		<span style={{fontWeight: 'bold',color: 'red',}}>
        {phone}</span><br/><br/>

        <span style={{fontWeight: 'bold',color: 'blue',fontSize:'20px'}}>country: </span>
        <input type="text" id="ibox"
		onChange={(e) => vcountry(e)}></input> 
		<span style={{fontWeight: 'bold',color: 'red',}}>
        {country}&emsp;&emsp;</span>

        <span style={{fontWeight: 'bold',color: 'blue',fontSize:'20px'}}>State: </span>
        <input type="text" id="ibox"
		onChange={(e) => vstate(e)}></input> 
		<span style={{fontWeight: 'bold',color: 'red',}}>
        {state}&emsp;&emsp;</span>
        
        <span style={{fontWeight: 'bold',color: 'blue',fontSize:'20px'}}>Postcode: </span>
        <input type="text" id="ibox"
		onChange={(e) => vpostal(e)}></input> 
		<span style={{fontWeight: 'bold',color: 'red',}}>
        {postal}&emsp;&emsp;</span>


        <br/><br/><br/> <button id="btn">Submit</button><br/><br/><br/>
    </div>       
);
}
export default App









