import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography'
import FormHelperText from '@material-ui/core/FormHelperText'
import TextField from '@material-ui/core/TextField'
import isEmpty from 'validator/lib/isEmpty'
import withStyles from '@material-ui/styles/withStyles'

const FormControlStyle = withStyles(() => ({
  root: {
    height:60,
    '& .MuiOutlinedInput-root': {
      width:'100%'
    },
    '& .MuiTypography-body2':{
      fontSize:'1.875rem',
      marginBottom:20,
      color:'#5F5F5F',
    }
  }
}))(FormControl)







const TextInputField = ({handleChange, error, label, name, value}) => {
  let inputError = !isEmpty(error || '')
  return (

    <FormControlStyle error={inputError}>
      <Typography variant={'body2'}>¿Cómo te gustaría ser llamado?</Typography>
      <TextField
        variant={'outlined'}
        name={name}
        value={value}
        onChange={handleChange}
        error={inputError}
        autoComplete="textInputField"
      />
      {inputError && <FormHelperText>{error}</FormHelperText>}
    </FormControlStyle>
  )
}
export default TextInputField
