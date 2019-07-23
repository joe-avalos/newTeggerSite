import React from 'react'
import isEmpty from 'validator/lib/isEmpty'
import matches from 'validator/lib/matches'
import {FormControl, FormHelperText, IconButton, InputAdornment, TextField} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const passRegEx = new RegExp(/^(?=.+[a-z])(?=.+[A-Z])(?=.+\d)[A-Za-z\d]\S{7,50}$/g)

const validate = value => {
  return !isEmpty(value) && matches(value, passRegEx)
}

export default function ComposedInputField(noValidate) {
  const [pass, setPass] = React.useState({pass: '', show: false})
  const [error, setError] = React.useState({error: false, strength: '', required: ''})
  
  function handleChange(e) {
    setPass({...pass, pass: e.target.value})
  }
  
  function handleBlur() {
    if (validate(pass.pass) || noValidate) {
      setError({...error, error: false})
    } else {
      setError({
        error: true,
        required: isEmpty(pass.pass) ? 'Password is required' : '',
        strength: matches(pass.pass, passRegEx) ? '' : 'Password must have an uppercase, a lowercase, and a numeric character'
      })
    }
  }
  
  function handleShowPass() {
    setPass({...pass, show: !pass.show})
  }
  
  return (
    <FormControl error={error.error}>
      <TextField
        variant="outlined"
        type={pass.show ? 'text' : 'password'}
        name="password"
        label="Password"
        value={pass.pass}
        onChange={handleChange}
        onBlur={handleBlur}
        error={error.error}
        autoComplete="current-password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="Submit"
                onClick={handleShowPass}
                color="primary"
              >
                {pass.show ? <VisibilityOff/> : <Visibility/>}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      {error.error && <FormHelperText>{error.required !== '' ? error.required : error.strength}</FormHelperText>}
    </FormControl>
  )
}
