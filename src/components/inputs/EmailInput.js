import React from 'react'
import FormControl from '@material-ui/core/FormControl/index'
import FormHelperText from '@material-ui/core/FormHelperText/index'
import TextField from '@material-ui/core/TextField'
import {useSelector} from 'react-redux'

import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'

const validate = value => !isEmpty(value) && isEmail(value)

export default function EmailInput() {
  const [name, setName] = React.useState(useSelector(state => state.user.subEmail))
  const [error, setError] = React.useState({error: false, email:'',required:''})
  function handleChange(e){
    setName(e.target.value)
  }
  function handleBlur(){
    if (validate(name)){
      setError({...error, error:false})
    }else{
      setError({
        error: true,
        email: isEmail(name) ? '':'Enter a valid email',
        required: isEmpty(name) ? 'Email is required' : ''
      })
    }
  }
  return (
    <FormControl error={error.error}>
      <TextField
        variant="outlined"
        name="email"
        label="Email"
        value={name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={error.error}
        autoComplete="email"
      />
      {error.error && <FormHelperText>{error.required !== ''?error.required:error.email}</FormHelperText>}
    </FormControl>
  )
}
