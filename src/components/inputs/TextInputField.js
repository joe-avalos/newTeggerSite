import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import TextField from '@material-ui/core/TextField'
import isEmpty from 'validator/lib/isEmpty'


const TextInputField = ({handleChange, error, label, name, value}) => {
  let inputError = !isEmpty(error || '')
  return (
    <FormControl error={inputError}>
      <TextField
        variant="outlined"
        label={label}
        name={name}
        value={value}
        onChange={handleChange}
        error={inputError}
        autoComplete="textInputField"
      />
      {inputError && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  )
}
export default TextInputField
