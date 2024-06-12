const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contact: {},
			
				},
		actions: {
			// Use getActions to call a function within a fuction
				createContact: (fullName, emailAddress, postalAddress, phoneNumber) => {
					fetch('https://playground.4geeks.com/apis/fake/contact/', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
						"full_name": fullName,
						"email": emailAddress,
						"agenda_slug": "melodycn",
						"address": postalAddress,
						"phone": phoneNumber,
						})
					})
						.then(response => response.json())
						.then(data => console.log(data))
						.catch(error => console.log('Error: ', error));

				},

				getContact: () => {
					fetch('https://playground.4geeks.com/apis/fake/contact/agenda/melodycn')
						.then(response => response.json())
						.then(data => {
							setStore({contacts: data})
							console.log(data)
						})
						.catch(error => console.log('Error: ', error));

				},

				getSingleContact: (id) => {
					fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`) 
						.then(response => response.json())
						.then(data => setStore({contact:data}))
						.catch(error => console.log('Error: ', error))
					
				},
				
				editContact: (fullName, emailAddress, postalAddress, phoneNumber, id) => {
					fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`
					, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify({
						"full_name": fullName,
						"email": emailAddress,
						"agenda_slug": "melodycn",
						"address": postalAddress,
						"phone": phoneNumber,
						})
					}) 
						.then(response => response.json())
						.then(data => console.log(data))
						.catch(error => console.log('Error: ', error));

				},

				deleteContact: (id) => {
					fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, 
					{
						method: 'DELETE',
					})
						.then(response => response.json())
						.then(data => {
							console.log(data);
							window.location.reload();
						})
						.catch(error => console.log('Error: ', error));

				
				}
			}

		}
		}

export default getState;
