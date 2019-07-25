import React from 'react'
import Button from '@material-ui/core/Button'
import UsernameEmailInput from '../inputs/UsernameEmailInput'
import useForm from './useForm'
import isEmpty from 'validator/lib/isEmpty'
import isEmail from 'validator/lib/isEmail'
import {useDispatch} from 'react-redux'
import {userFetchUserEmail} from '../../modules/actions/userActions'

const EmailForm = () => {
  const {values, errors, handleChange, handleSubmit} = useForm(login, validate)
  const dispatch = useDispatch()
  function login() {
    dispatch(userFetchUserEmail(values.email))
  }
  function validate() {
    let error = {}
    if (isEmpty(values.email || '')){
      error.email = 'Email is required'
    }else if(!isEmail(values.email)){
      error.email = 'Enter a valid email'
    }
    return error
  }
  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <UsernameEmailInput fullWidth handleChange={handleChange} value={values.email} name='email' label='Email' error={errors.email} disabled={false}/>
      <Button type="submit">listo</Button>
    </form>
  )
}
export default EmailForm
