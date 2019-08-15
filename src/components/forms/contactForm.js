import React from 'react'

import Button from '@material-ui/core/Button'

import isEmpty from 'validator/lib/isEmpty'
import {useDispatch, useSelector} from 'react-redux'

import useForm from './useForm'
import {userContactFormSubmit} from '../../modules/actions/userActions'
import TextInputField from '../inputs/TextInputField'

const ContactForm = () => {
  const {values, errors, handleChange, handleSubmit} = useForm(login, validate)
  const langForm = useSelector(state => state.language.langJson.forms)
  const profile = useSelector(state => state.logged.profile)
  const dispatch = useDispatch()
  function login() {
    dispatch(userContactFormSubmit(values, profile.uuid))
  }
  function validate() {
    let error = {}
    if (isEmpty(values.subject || '')){
      error.subject = 'Subject is required'
    }else if(isEmpty(values.description)){
      error.description = 'Message is required'
    }
    return error
  }
  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <TextInputField
        handleChange={handleChange}
        value={values.subject}
        name='subject'
        label={langForm.subject}
        error={errors.subject}
        disabled={false}
      />
      <TextInputField
        handleChange={handleChange}
        value={values.description}
        name='subject'
        label={langForm.message}
        error={errors.description}
        disabled={false}
        rows={5}
      />
      <Button type="submit">
        {langForm.ready}
      </Button>
    </form>
  )
}
export default ContactForm
