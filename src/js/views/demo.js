import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName ] = useState("");
	const [emailAddress, setEmailAddress ] = useState("");
	const [phoneNumber, setPhoneNumber ] = useState("");
	const [postalAddress, setPostalAddress ] = useState("");

	const handleSubmit = e => {
		e.preventDefault();
		console.log(fullName);
		actions.createContact( fullName, emailAddress, postalAddress, phoneNumber );
		setFullName("");
		setEmailAddress("");
		setPhoneNumber("");
		setPostalAddress("");
	}

	return (

		<div className="container">
			<h1 className="text-center">Add a new contact</h1>
		<form onSubmit={handleSubmit} >
			<div className="mb-3">
				<label className="form-label" >Full name</label>
				<input type="text" className="form-control" value={fullName} onChange={e => setFullName(e.target.value)}  placeholder = "Type name here..." />
			</div>
			<div className="mb-3">
				<label className="form-label" >Email</label>
				<input type="email" className="form-control" value={emailAddress} onChange={e => setEmailAddress(e.target.value)} placeholder = "Enter email here..." />
			</div>
			<div className="mb-3">
				<label className="form-label" >Phone Number</label>
				<input type="text" className="form-control" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder = "Enter number here..." />
			</div>
			<div className="mb-3">
				<label className="form-label" >Address</label>
				<input type="text" className="form-control" value={postalAddress} onChange={e => setPostalAddress(e.target.value)} placeholder = "Enter address here..." />
			</div>
			<div className="d-grid gap-2">
			<button type="submit" className="btn btn-primary">Save</button>
			</div>

			
		</form>
		
			<Link to="/">
				<button className="btn btn-link">or get back to Contacts</button>
			</Link>
		</div>
		
	);
};
