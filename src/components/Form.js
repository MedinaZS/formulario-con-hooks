import React from 'react'
import Inputs from './Inputs';

const Form = (props) => {

  const { firstName, setFirstName, lastName, setLastName, email, setEmail, password, setPassword, passwordConfirm, setPasswordConfirm } = props.user;

  console.log(firstName);

  return (
    <form>
      <Inputs titulo={"First Name"} tipo={"text"} value={firstName} setValue={setFirstName} />
      <Inputs titulo={"Last Name"} tipo={"text"} value={lastName} setValue={setLastName} />
      <Inputs titulo={"Email"} tipo={"email"} value={email} setValue={setEmail} />
      <Inputs titulo={"Password"} tipo={"password"} value={password} setValue={setPassword} />
      <Inputs titulo={"Confirm Password"} tipo={"password"} value={passwordConfirm} setValue={setPasswordConfirm} />
    </form>
  )
}

export default Form