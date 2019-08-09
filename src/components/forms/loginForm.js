import React from 'react'

import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

import UsernameEmailInput from '../inputs/UsernameEmailInput'
import PasswordInput from '../inputs/PasswordInput'
import useForm from './useForm'
import isEmpty from 'validator/lib/isEmpty'
import {useDispatch, useSelector} from 'react-redux'
import {userForgotPassword, userLoginRequest} from '../../modules/actions/userActions'
import TGGDialog from '../TGGDialog'

const LoginForm = () => {
  const subEmail = useSelector(state => state.user.subEmail)
  const langForm = useSelector(state => state.language.langJson.forms)
  const [dialog, setDialog] = React.useState({open: false, content: ''})
  
  const {values, errors, handleChange, handleSubmit} = useForm(callback, validate, {userid: subEmail})
  const dispatch = useDispatch()
  
  function callback() {
    dispatch(userLoginRequest(values))
  }
  
  function validate() {
    let error = {}
    if (isEmpty(values.password || '')) {
      error.password = 'Password is required'
    }
    return error
  }
  
  function handleClose() {
    setDialog({open: false, content: ''})
  }
  
  function handleRecoverPassword() {
    setDialog({open: true, content: 'recover'})
  }
  
  function handleAgree() {
    handleClose()
    dispatch(userForgotPassword(subEmail))
  }
  
  return (
    <>
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <UsernameEmailInput
          handleChange={handleChange}
          value={subEmail}
          name='userid'
          label={langForm.email}
          error={''}
          disabled={true}
        />
        <PasswordInput
          handleChange={handleChange}
          value={values.password}
          name='password'
          label={langForm.password}
          error={errors.password}
        />
        <Box>
          <Button onClick={handleRecoverPassword} variant={'contained'}>{langForm.recoverPassword}</Button>
        </Box>
        <Box>
          <Button type="submit" className='buttonForm'>
            {langForm.ready}
          </Button>
        </Box>
      </form>
      <TGGDialog
        handleClose={handleClose}
        open={dialog.open}
        content={dialog.content}
        alert={true}
        handleAgree={handleAgree}
        userEmail={subEmail}
      />
    </>
  )
}
export default LoginForm
