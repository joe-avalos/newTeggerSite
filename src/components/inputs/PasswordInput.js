import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import isEmpty from 'validator/lib/isEmpty'

const PasswordInput = ({error, handleChange, label, name, value}) => {
  const [show, setShow] = React.useState(false)
  function handleShowPass() {
    setShow(!show)
  }
  let inputError = !isEmpty(error || '')

  return (
    <FormControl error={inputError}>
      <TextField
        variant="outlined"
        type={show ? 'text' : 'password'}
        name={name}
        label={label}
        value={value || ''}
        onChange={handleChange}
        autoComplete="current-password"
        error={inputError}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="showPass"
                onClick={handleShowPass}
                color="primary"
              >
                {show ? <VisibilityOff/> : <Visibility/>}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      {inputError && <FormHelperText>{error}</FormHelperText> }
    </FormControl>
  )
}
export default PasswordInput
