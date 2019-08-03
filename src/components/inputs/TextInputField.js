import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import FormHelperText from '@material-ui/core/FormHelperText'
import TextField from '@material-ui/core/TextField'
import isEmpty from 'validator/lib/isEmpty'

const TextInputField = ({handleChange, error, label, name, value}) => {
  let inputError = !isEmpty(error || '')
  return (

    <FormControl error={inputError}>
      <Typography variant={'body2'}>{label}</Typography>
      <TextField
        variant={'outlined'}
        name={name}
        value={value}
        onChange={handleChange}
        error={inputError}
        autoComplete="textInputField"
        fullWidth
      />
      {inputError && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  )
}
export default TextInputField
