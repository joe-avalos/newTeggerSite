import React from 'react'
import {useDispatch} from 'react-redux'
import isEmpty from 'validator/lib/isEmpty'

import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import FormHelperText from '@material-ui/core/FormHelperText'
import Close from '@material-ui/icons/Close'

import {userDeleteSubmit} from '../../modules/actions/userActions'

const UsernameEmailInputField = ({handleChange, disabled, error, label, name, value}) => {
  const dispatch = useDispatch()
  let inputError = !isEmpty(error || '')
  function handleClearInput(){
    dispatch(userDeleteSubmit())
  }
  if (disabled) {
    return (
      <FormControl>
        <TextField
          variant="outlined"
          onChange={handleChange}
          label={label}
          value={value || ''}
          name={name}
          disabled={disabled}
          autoComplete="emailOrUsername"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  aria-label="Submit"
                  onClick={handleClearInput}
                  color="primary"
                >
                  <Close />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </FormControl>
    )
  }else{
    return (
      <FormControl error={inputError}>
        <TextField
          variant="outlined"
          onChange={handleChange}
          label={label}
          value={value || ''}
          name={name}
          autoComplete="emailOrUsername"
          error={inputError}
        />
        {inputError !== '' && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
    )
  }
}
export default UsernameEmailInputField
