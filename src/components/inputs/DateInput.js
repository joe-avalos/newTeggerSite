import React from 'react'
import isEmpty from 'validator/lib/isEmpty'

import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import FormHelperText from '@material-ui/core/FormHelperText'
import TextField from '@material-ui/core/TextField'

const DateInput = ({birthday, handleChange, error, label, name, value}) => {
  let inputError = !isEmpty(error || '')
  let today = new Date()
  let defaultValue = birthday ?
    new Date(today.setFullYear(today.getFullYear() - 18)) :
    new Date(today)
  let dateString = defaultValue.getFullYear() + '-' +
    ((defaultValue.getMonth() + 1) + '').padStart(2,'0') + '-' +
    (defaultValue.getDay()+'').padStart(2,'0')
  return (
    <FormControl error={inputError}>
      <Typography variant={'h3'}>{label}</Typography>
      <TextField
        type="date"
        name={name}
        value={value}
        onChange={handleChange}
        defaultValue={dateString}
        InputProps={{inputProps:{max:dateString}}}
      />
      {inputError && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  )
}
export default DateInput
