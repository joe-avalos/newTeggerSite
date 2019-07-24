import React from 'react'

import Button from '@material-ui/core/Button'

import PasswordInput from '../inputs/PasswordInput'
import CheckboxesGroupSignup from '../inputs/CheckboxesGroupSignup'
import UsernameEmailInput from '../inputs/UsernameEmailInput'
import ReferrerInput from '../inputs/ReferrerInput'
import useForm from './useForm'

import {useSelector} from 'react-redux'

import isEmpty from 'validator/lib/isEmpty'
import isAlphanumeric from 'validator/lib/isAlphanumeric'
import isLength from 'validator/lib/isLength'
import matches from 'validator/lib/matches'

const RegisterForm = () => {
  const {values, errors, handleChange, handleSubmit} = useForm(register, validate)
  const subEmail = useSelector(state => state.user.subEmail)
  function register() {
    console.log(values)
  }
  function validate() {
    let error = {}
    console.log(errors)
    console.log(values)
    if (isEmpty(values.username || '')){
      error.username = 'Username is required'
    } else if (!isAlphanumeric(values.username)){
      error.username = 'Only letters or numbers with no spaces.'
    } else if (!isLength(values.username,{min:4})) {
      error.username = 'At least 4 characters'
    }
    if (isEmpty(values.password || '')){
      error.password = 'Password is required'
    }else if (!matches(values.password, /^(?=.+[a-z])(?=.+[A-Z])(?=.+\d)[A-Za-z\d]\S{7,50}$/g)) {
      error.password = 'At least one uppercase, one lowercase, one number and 8 characters in length'
    }
    if (!values.acceptTerms || !values.acceptPrivacy || !values.acceptAge) {
      error.checkbox = 'All checkboxes are required'
    }
    return error
  }
  return (
    <form onSubmit={handleSubmit}>
      <UsernameEmailInput value={subEmail} name='email' label='Email' error={''} disabled={true}/>
      <UsernameEmailInput handleChange={handleChange} value={values.username} name='username' label='Username' error={errors.username} disabled={false}/>
      <PasswordInput handleChange={handleChange} value={values.password} name='password' label='Password' error={errors.password} />
      <CheckboxesGroupSignup handleChange={handleChange} error={errors.checkbox} />
      <ReferrerInput />
      <Button type="submit">Ir!</Button>
    </form>
  )
}
export default RegisterForm
