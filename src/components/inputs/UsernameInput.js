import React from 'react'
import isAlphanumeric from 'validator/lib/isAlphanumeric'
import isEmpty from 'validator/lib/isEmpty'
import isLength from 'validator/lib/isLength'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import FormHelperText from '@material-ui/core/FormHelperText'

export default function UsernameInput({label}) {
  const validate = value => !isEmpty(value) && (isAlphanumeric(value) && isLength(value, {min: 4}))
  const [name, setName] = React.useState('')
  const [error, setError] = React.useState({error: false, username: '', required: ''})
  
  function handleChange(e) {
    setName(e.target.value)
  }
  
  function handleBlur() {
    if (validate(name)) {
      setError({...error, error: false})
    } else {
      setError({
        error: true,
        username: (isAlphanumeric(name) && isLength(name, {min: 4})) ? '' : 'Only letters and numbers and at least four characters',
        required: isEmpty(name) ? 'Username is required' : ''
      })
    }
  }
  return (
    <FormControl error={error.error}>
      <TextField
        variant="outlined"
        label={label}
        name="username"
        value={name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={error.error}
        autoComplete="username"
      />
      {error.error &&
      <FormHelperText>{error.required !== '' ? error.required : error.username}</FormHelperText>}
    </FormControl>
  )
}
