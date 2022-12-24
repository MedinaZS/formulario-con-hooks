import React, { useState } from 'react'
import Form from './Form';
import FormDetail from './FormDetail';

const Wrapper = () => {

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	const user = { firstName, setFirstName, lastName, setLastName, email, setEmail, password, setPassword, passwordConfirm, setPasswordConfirm };

	return (
		<div>
			<Form user={user} />
			<FormDetail user={user} />
		</div>
	)
}

export default Wrapper