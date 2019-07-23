import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import TGGDialog from '../TGGDialog'

export default function CheckboxesGroupSignup() {
  const [cbgs, setCbgs] = React.useState({
    terms: false,
    privacy: false,
    age: false
  })
  
  const [dialog, setDialog] = React.useState({open:false,content:''})
  const handleChange = name => e => {
    setCbgs({...cbgs, [name]: e.target.checked});
  }
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
      <FormControl>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox name="cbgs" onChange={handleChange('terms')} value="terms"/>}
            label={
              <Typography variant={'body2'}>Acepto <Link onClick={handleTerms}>términos y
                condiciones</Link></Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox name="cbgs" onChange={handleChange('privacy')} value="privacy"/>}
            label={
              <Typography variant={'body2'}>Estoy de acuerdo con el <Link onClick={handlePrivacy}>aviso de
                privacidad</Link></Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox name="cbgs" onChange={handleChange('age')} value="age"/>}
            label={
              <Typography variant={'body2'}>Soy mayor de 18 años</Typography>
            }
          />
        </FormGroup>
      </FormControl>
      <TGGDialog open={dialog.open} content={dialog.content} handleClose={handleClose}/>
    </>
  )
}
