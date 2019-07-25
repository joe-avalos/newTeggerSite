import React from 'react'
import Button from '@material-ui/core/Button'
import UsernameEmailInput from '../inputs/UsernameEmailInput'
import PasswordInput from '../inputs/PasswordInput'
import useForm from './useForm'
import isEmpty from 'validator/lib/isEmpty'
import {useDispatch, useSelector} from 'react-redux'
import {userLoginRequest} from '../../modules/actions/userActions'

const LoginForm = () => {
  const {values, errors, handleChange, handleSubmit} = useForm(login, validate)
  const subEmail = useSelector(state => state.user.subEmail)
  const dispatch = useDispatch()
  function login() {
    dispatch(userLoginRequest(values))
  }
  function validate() {
    let error = {}
    if (isEmpty(values.password || '')){
      error.password = 'Password is required'
    }
    return error
  }
  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <UsernameEmailInput handleChange={handleChange} value={subEmail} name='userid' label='Email' error={''} disabled={true}/>
      <PasswordInput handleChange={handleChange} value={values.password} name='password' label='Password' error={errors.password} />
      <Button type="submit" className='buttonForm'>LISTO</Button>
    </form>
  )
}
export default LoginForm
