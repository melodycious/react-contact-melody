import React, { useEffect, useContext } from "react";
import "../../styles/home.css";
import {Card} from "../component/card.jsx";
import { Context } from "../store/appContext";


export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getContact();

	}, []
	
	);

	return (
		<div className="text-center mt-5">
			{store.contacts.map((item, index) => {
				return (

			<Card 
				fullName ={item.full_name}
				postalAddress ={item.address}
				phoneNumber ={item.phone}
				emailAddress ={item.email}
				id ={item.id}
				key={index} />
				)
			})
			}
			
		</div>
	);
};
