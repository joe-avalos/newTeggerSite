import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Hidden from  '@material-ui/core/Hidden'
import UsernameEmailInput from '../inputs/UsernameEmailInput'
import PasswordInput from '../inputs/PasswordInput'
import useForm from './useForm'
import isEmpty from 'validator/lib/isEmpty'
import {useDispatch} from 'react-redux'
import {loggedPostPasswordChange} from '../../modules/actions/loggedActions'

const UserProfileForm = ({profile}) => {
  const {values, errors, handleChange, handleSubmit} = useForm(callback, validate)
  const dispatch = useDispatch()
  function callback() {
    dispatch(loggedPostPasswordChange(values))
  }
  function validate() {
    let error = {}
    if (isEmpty(values.oldPassword || '')){
      error.currentPassword = 'Password is required'
    }
    if (isEmpty(values.newPassword || '')){
      error.newPassword = 'Password is required'
    }
    return error
  }
  return (

    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <Grid container>
        <Hidden mdDown>
          <Grid item md={1} />
        </Hidden>
        <Grid item xs={12} md={4}>
          <UsernameEmailInput
            handleChange={handleChange}
            value={profile.email}
            name='email'
            label='Email'
            error={''}
            readonly={true}
          />
        </Grid>
        <Hidden mdDown>
          <Grid item md={1} />
        </Hidden>
        <Grid item xs={12} md={4}>
          <UsernameEmailInput
            handleChange={handleChange}
            value={profile.name}
            name='username'
            label='Username'
            error={''}
            readonly={true}
          />
        </Grid>
        <Hidden mdDown>
          <Grid item md={2} />
          <Grid item md={1} />
        </Hidden>
        <Grid item xs={12} md={4}>
            <PasswordInput
              handleChange={handleChange}
              value={values.oldPassword}
              name='oldPassword'
              label='Current Password'
              error={errors.currentPassword}
            />
        </Grid>
        <Hidden mdDown>
          <Grid item md={1} />
        </Hidden>
        <Grid item xs={12} md={4}>
          <PasswordInput
            handleChange={handleChange}
            value={values.newPassword}
            name='newPassword'
            label='New Password'
            error={errors.newPassword}
          />
        </Grid>
        {/*<Grid item xs={12} md={4}>
          <UsernameEmailInput
            handleChange={handleChange}
            value={values.referrer}
            name='referrer'
            label='Referrer'
            error={errors.referrer}
            readonly={true}
          />
        </Grid>*/}
      </Grid>
      <Button style={{ display:'block', margin:'auto'}} type="submit" className='buttonForm'>
        LISTO
      </Button>
    </form>
  )
}
export default UserProfileForm
