import React from 'react'
import Button from '@material-ui/core/Button'
import UsernameEmailInput from '../inputs/UsernameEmailInput'
import PasswordInput from '../inputs/PasswordInput'
import useForm from './useForm'
import isEmpty from 'validator/lib/isEmpty'
import {useSelector} from 'react-redux'

const LoginForm = () => {
  const {values, handleChange, handleSubmit} = useForm(login, validate)
  const subEmail = useSelector(state => state.user.subEmail)
  const [error, setError] = React.useState({})
  function login() {
  
  }
  function validate() {
    if (!isEmpty(values.password || '')){
      setError({password:''})
      return true
    }else{
      setError({password:'Password is required'})
      return false
    }
  }
  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <UsernameEmailInput handleChange={handleChange} value={subEmail} name='userid' label='Email' error={''} disabled={true}/>
      <PasswordInput handleChange={handleChange} value={values.password} name='password' label='Password' error={error.password} />
      <Button type="submit">Ir</Button>
    </form>
  )
}
export default LoginForm
