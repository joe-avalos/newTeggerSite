import React from 'react'
import Button from '@material-ui/core/Button'
import UsernameEmailInput from '../inputs/UsernameEmailInput'
import PasswordInput from '../inputs/PasswordInput'
import useForm from './useForm'
import isEmpty from 'validator/lib/isEmpty'
import {useDispatch} from 'react-redux'
import {userLoginRequest} from '../../modules/actions/userActions'

const UserProfileForm = ({profile}) => {
  const {values, errors, handleChange, handleSubmit} = useForm(callback, validate)
  const dispatch = useDispatch()
  function callback() {
    dispatch(userLoginRequest(values))
  }
  function validate() {
    let error = {}
    if (isEmpty(values.currentPassword || '')){
      error.currentPassword = 'Password is required'
    }
    if (isEmpty(values.newPassword || '')){
      error.newPassword = 'Password is required'
    }
    return error
  }
  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <UsernameEmailInput
        handleChange={handleChange}
        value={profile.email}
        name='email'
        label='Email'
        error={''}
        readonly={true}
      />
      <UsernameEmailInput
        handleChange={handleChange}
        value={profile.name}
        name='username'
        label='Username'
        error={''}
        readonly={true}
      />
      <PasswordInput
        handleChange={handleChange}
        value={values.currentPassword}
        name='oldPassword'
        label='Current Password'
        error={errors.currentPassword}
      />
      <PasswordInput
        handleChange={handleChange}
        value={values.newPassword}
        name='newPassword'
        label='New Password'
        error={errors.newPassword}
      />
      <UsernameEmailInput
        handleChange={handleChange}
        value={values.referrer}
        name='referrer'
        label='Referrer'
        error={errors.referrer}
        readonly={true}
      />
      <Button type="submit" className='buttonForm'>
        LISTO
      </Button>
    </form>
  )
}
export default UserProfileForm
