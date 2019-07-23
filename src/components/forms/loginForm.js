import React from 'react'
import UsernameEmailInput from '../inputs/UsernameEmailInput'
import PasswordInput from '../inputs/PasswordInput'

export default function LoginForm() {
  return (
    <>
      <UsernameEmailInput />
      <PasswordInput noValidate={true} />
    </>
  )
}
