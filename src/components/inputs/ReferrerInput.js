import React from 'react'
import isAlphanumeric from 'validator/lib/isAlphanumeric'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Arrow from '@material-ui/icons/ArrowForward'
import {useDispatch, useSelector} from 'react-redux'
import {userFetchUserUsername} from '../../modules/actions/userActions'

export default function ReferrerInput() {
  const dispatch = useDispatch()
  const refError = useSelector(state => state.user.referrerError)
  const [name, setName] = React.useState(useSelector(state => state.user.subReferrer))
  const [error, setError] = React.useState('')
  
  function handleChange(e) {
    setName(e.target.value)
  }
  
  function handleSubmit() {
    if (isAlphanumeric(name)) {
      setError('')
      dispatch(userFetchUserUsername(name, 'referrer'))
    } else {
      setError('Only letters and numbers')
    }
  }
  
  return (
    <FormControl error={error !== '' || refError !== ''}>
      <TextField
        variant="outlined"
        label="Referrer"
        name="referrer"
        value={name}
        onChange={handleChange}
        error={error !== '' || refError !== ''}
        autoComplete="username"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="Submit"
                onClick={handleSubmit}
                color="primary"
              >
                <Arrow/>
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      {(error !== '' || refError !== '') && <FormHelperText>{error !== '' ? error : refError}</FormHelperText>}
    </FormControl>
  )
}
