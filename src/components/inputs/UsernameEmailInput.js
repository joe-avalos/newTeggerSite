import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import FormControl from '@material-ui/core/FormControl'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Close from '@material-ui/icons/Close'

import {userDeleteSubmit} from '../../modules/actions/userActions'

export default function UsernameEmailInputField() {
  const dispatch = useDispatch()
  const email = useSelector(state => state.user.subEmail )
  function handleClearInput(){
    dispatch(userDeleteSubmit())
  }
  return (
    <FormControl>
      <TextField
        variant="outlined"
        label="Email or Username"
        value={email}
        name="emailOrUsername"
        disabled
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
}
