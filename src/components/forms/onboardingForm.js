import React from 'react'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import withStyles from '@material-ui/styles/withStyles'
import isEmpty from 'validator/lib/isEmpty'
import {useDispatch, useSelector} from 'react-redux'
import clsx from 'clsx'

import useForm from './useForm'
import TextInputField from '../inputs/TextInputField'
import {loggedPostModuleAnswers} from '../../modules/actions/loggedActions'


const TGGGenderRadio = withStyles(() => ({
  root: {
    opacity: 0,
    width: 0,
    height: 0,
    padding: 0
  }
}))(Radio)

const OnboardingForm = () => {
  const {values, errors, handleChange, handleSubmit} = useForm(callback, validate)
  const userUUID = useSelector(state => state.logged.profile.uuid)
  const dispatch = useDispatch()
  
  function callback() {
    dispatch(loggedPostModuleAnswers(values, userUUID, 'ad9e768d875ac3d933d68cfe2cb557a3'))
  }
  
  function validate() {
    let error = {}
    if (isEmpty(values['f6039d44b29456b20f8f373155ae4973'] || '')) {
      error.fullname = 'Name is required'
    }
    if (isEmpty(values['1f7b89b253833a6dd8cd456fb019eb47'] || '')) {
      error.gender = 'Please select your gender'
    }
    return error
  }
  
  const FormControlGender = withStyles(theme => ({
    root: {
      marginBottom: 30,
      marginTop: 50,
      '& .MuiAvatar-root': {
        width: 190,
        height: 190,
        backgroundColor: '#B8B8B8',
        [theme.breakpoints.down('sm')]: {
          width: 140,
          height: 140,
        },
      },
      '& .Mui-checked + .MuiAvatar-root':{
        backgroundColor: '#FF7825'
      },
      '& .MuiFormControlLabel-root': {
        display: 'inline-flex',
      },
      '& .MuiFormGroup-root': {
        display: 'inline',
        padding: '0 55px',
        [theme.breakpoints.down('sm')]: {
          padding: 0,
        },
      },
    }
  }))(FormControl)
  
  
  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off"
          style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
      <TextInputField
        handleChange={handleChange}
        error={errors.fullname}
        label={'Full Name'}
        name={'f6039d44b29456b20f8f373155ae4973'}
        value={values['f6039d44b29456b20f8f373155ae4973']}
      />
      <FormControlGender
        component="fieldset"
        error={errors.gender}
      >
        <FormLabel component="legend">
          <Typography variant={'body2'}>Género</Typography>
        </FormLabel>
        <RadioGroup
          name='1f7b89b253833a6dd8cd456fb019eb47'
          value={values['1f7b89b253833a6dd8cd456fb019eb47'] || ''}
          onChange={handleChange}
        >
          <FormControlLabel
            control={
              <>
                <TGGGenderRadio value={'5be369dbfc8f6b4f67abb71d'} disableRipple/>
                <Avatar src="https://files.tegger.io/assets/tegger/images/reactProfile/00_plebeya.png"/>
              </>
            }
            label={'Dame'}
            labelPlacement="bottom"
          />
          <FormControlLabel
            control={
              <>
                <TGGGenderRadio value={'5be369d3fc8f6b4f67abb71c'} disableRipple/>
                <Avatar src="https://files.tegger.io/assets/tegger/images/reactProfile/00_plebeyo.png"/>
              </>
            }
            label={'Knight'}
            labelPlacement="bottom"
          />
        </RadioGroup>
        {errors.gender && <FormHelperText>{errors.gender}</FormHelperText>}
      </FormControlGender>
      <Button type="submit">Ir</Button>
    </form>
  )
}
export default OnboardingForm
