import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import isEmpty from 'validator/lib/isEmpty'

import TGGDialog from '../TGGDialog'

const CheckboxesGroupSignup = ({handleChange, error}) => {
  let inputError = !isEmpty(error || '')
  const [dialog, setDialog] = React.useState({open:false,content:''})
  function handleTerms() {
    setDialog({open: true, content: 'terms'})
  }
  function handlePrivacy() {
    setDialog({open:true, content:'privacy'})
  }
  function handleClose() {
    setDialog({open: false, content: ''})
  }
  return (
    <>
      <FormControl error={inputError}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox name="acceptTerms" onChange={handleChange} />}
            label={
              <Typography variant={'body2'}>
                Acepto <Link onClick={handleTerms}>términos y condiciones</Link>
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox name="acceptPrivacy" onChange={handleChange} />}
            label={
              <Typography variant={'body2'}>
                Estoy de acuerdo con el <Link onClick={handlePrivacy}>aviso de privacidad</Link>
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox name="acceptAge" onChange={handleChange} />}
            label={
              <Typography variant={'body2'}>Soy mayor de 18 años</Typography>
            }
          />
        </FormGroup>
        {inputError && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
      <TGGDialog open={dialog.open} content={dialog.content} handleClose={handleClose}/>
    </>
  )
}
export default CheckboxesGroupSignup
