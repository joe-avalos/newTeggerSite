import React from 'react'

import Button from '@material-ui/core/Button'

import isEmpty from 'validator/lib/isEmpty'
import isEmail from 'validator/lib/isEmail'
import {useDispatch, useSelector} from 'react-redux'
import _ from 'lodash'

import UsernameEmailInput from '../inputs/UsernameEmailInput'
import useForm from './useForm'
import {userFetchUserEmail} from '../../modules/actions/userActions'

const EmailForm = () => {
  const {values, errors, handleChange, handleSubmit} = useForm(login, validate)
  const langForm = useSelector(state => state.language.langJson.forms)
  const dispatch = useDispatch()
  function login() {
    dispatch(userFetchUserEmail(_.toLower(values.email)))
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
      <UsernameEmailInput
        handleChange={handleChange}
        value={values.email}
        name='email'
        label={langForm.email}
        error={errors.email}
        disabled={false}
      />
      <Button type="submit">
        {langForm.ready}
      </Button>
    </form>
  )
}
export default EmailForm
