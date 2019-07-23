import React from 'react'
import PasswordInput from '../inputs/PasswordInput'
import UsernameInput from '../inputs/UsernameInput'
import CheckboxesGroupSignup from '../inputs/CheckboxesGroupSignup'
import UsernameEmailInputField from '../inputs/UsernameEmailInput'
import ReferrerInput from '../inputs/ReferrerInput'

export default function RegisterForm(){
  return (
    <>
      <UsernameEmailInputField />
      <UsernameInput label="username" />
      <PasswordInput noValidate={false} />
      <CheckboxesGroupSignup />
      <ReferrerInput />
    </>
  )
}
