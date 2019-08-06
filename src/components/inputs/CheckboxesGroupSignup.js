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
import {useSelector} from 'react-redux'

const CheckboxesGroupSignup = ({handleChange, error}) => {
  let inputError = !isEmpty(error || '')
  const langForm = useSelector(state => state.language.langJson.forms)
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
                {langForm.checkboxes.title[0]}<Link onClick={handleTerms}>{langForm.checkboxes.link[0]}</Link>
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox name="acceptPrivacy" onChange={handleChange} />}
            label={
              <Typography variant={'body2'}>
                {langForm.checkboxes.title[1]}<Link onClick={handlePrivacy}>{langForm.checkboxes.link[1]}</Link>
              </Typography>
            }
          />
          <FormControlLabel
            control={<Checkbox name="acceptAge" onChange={handleChange} />}
            label={
              <Typography variant={'body2'}>{langForm.checkboxes.title[2]}</Typography>
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
