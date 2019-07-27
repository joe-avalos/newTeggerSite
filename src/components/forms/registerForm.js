import React from 'react'

import Button from '@material-ui/core/Button'

import PasswordInput from '../inputs/PasswordInput'
import CheckboxesGroupSignup from '../inputs/CheckboxesGroupSignup'
import UsernameEmailInput from '../inputs/UsernameEmailInput'
import useForm from './useForm'

import {useDispatch, useSelector} from 'react-redux'

import isEmpty from 'validator/lib/isEmpty'
import isAlphanumeric from 'validator/lib/isAlphanumeric'
import isLength from 'validator/lib/isLength'
import matches from 'validator/lib/matches'
import {userNewSignupRequest} from '../../modules/actions/userActions'

const RegisterForm = () => {
  const subEmail = useSelector(state => state.user.subEmail)
  const subReferrer = useSelector(state => state.user.subReferrer)
  const {values, errors, handleChange, handleSubmit} = useForm(register, validate,
    {
      email: subEmail,
      referrer: subReferrer
    })
  const dispatch = useDispatch()
  
  function register() {
    dispatch(userNewSignupRequest(
      {
        email: values.email,
        username: values.username,
        password: values.password
      }))
  }
  
  function validate() {
    let error = {}
    if (isEmpty(values.username || '')) {
      error.username = 'Username is required'
    } else if (!isAlphanumeric(values.username)) {
      error.username = 'Only letters or numbers with no spaces.'
    } else if (!isLength(values.username, {min: 4})) {
      error.username = 'At least 4 characters'
    }
    if (!isAlphanumeric(values.referrer)) {
      error.referrer = 'Only letters or numbers with no spaces.'
    }
    if (isEmpty(values.password || '')) {
      error.password = 'Password is required'
    } else if (!matches(values.password, /^(?=.+[a-z])(?=.+[A-Z])(?=.+\d)[A-Za-z\d]\S{7,50}$/g)) {
      error.password = 'At least one uppercase, one lowercase, one number and 8 characters in length'
    }
    if (!values.acceptTerms || !values.acceptPrivacy || !values.acceptAge) {
      error.checkbox = 'All checkboxes are required'
    }
    
    return error
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <UsernameEmailInput
        value={values.email}
        name='email'
        label='Email'
        error={''}
        disabled={true}
      />
      <UsernameEmailInput
        handleChange={handleChange}
        value={values.username}
        name='username'
        label='Username'
        error={errors.username}
        disabled={false}
      />
      <PasswordInput
        handleChange={handleChange}
        value={values.password}
        name='password'
        label='Password'
        error={errors.password}
      />
      <CheckboxesGroupSignup
        handleChange={handleChange}
        error={errors.checkbox}
      />
      <UsernameEmailInput
        handleChange={handleChange}
        value={values.referrer}
        name='referrer'
        label='Referrer'
        error={errors.referrer}
        disabled={false}
      />
      <Button type="submit">Ir!</Button>
    </form>
  )
}
export default RegisterForm
