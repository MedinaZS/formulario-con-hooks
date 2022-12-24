import React from 'react'

const FormDetail = (props) => {

	const { firstName, lastName, email, password, passwordConfirm } = props.user;

	return (
		<div className='userDetail'>

			<p id='formDetailTitle'>Your Form Data</p>

			<table>
				<tr>
					<td className="itemTitle">First Name</td>
					<td>{firstName}</td>
				</tr>
				<tr>
					<td className="itemTitle">Last Name</td>
					<td>{lastName}</td>
				</tr>
				<tr>
					<td className="itemTitle">Email</td>
					<td>{email}</td>
				</tr>
				<tr>
					<td className="itemTitle">Password</td>
					<td>{password}</td>
				</tr>
				<tr>
					<td className="itemTitle">Confirm Password</td>
					<td>{passwordConfirm}</td>
				</tr>
			</table>

		</div>
	)
}

export default FormDetail