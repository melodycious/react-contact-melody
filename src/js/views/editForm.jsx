import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const EditForm = () => {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName ] = useState("nombre");
	const [emailAddress, setEmailAddress ] = useState("email");
	const [phoneNumber, setPhoneNumber ] = useState("phone");
	const [postalAddress, setPostalAddress ] = useState("address");
    const { id } = useParams();

    useEffect(() => {
        actions.getSingleContact(id);
        
    }, []);

	useEffect(() => {

		setFullName(store.contact.full_name);
        setEmailAddress(store.contact.email);
        setPhoneNumber(store.contact.phone);
        setPostalAddress(store.contact.address)

	}, [store.contact]);
    /* console.log(id) */

	const handleSubmit = e => {
		e.preventDefault();
		console.log(fullName);
		actions.editContact( fullName, emailAddress, postalAddress, phoneNumber, id );

	}

	return (

		<div className="container">
			<h1 className="text-center">Edit contact</h1>
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
