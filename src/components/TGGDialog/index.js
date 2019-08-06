import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Terms from './Terms'
import Help from './Help'
import Privacy from './Privacy'
import Navigation from './Navigation'
import Success from './Success'
import Recover from './Recover'
import {useSelector} from 'react-redux'

const TGGDialog = ({open, content, handleClose, alert = false, handleAgree = {}, userEmail = ''}) => {
  const langForm = useSelector(state => state.language.langJson.forms)
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll={'paper'}
    >
      {content === 'terms' && <Terms />}
      {content === 'privacy' && <Privacy />}
      {content === 'navigation' && <Navigation />}
      {content === 'success' && <Success />}
      {content === 'help' && <Help />}
      {content === 'recover' && <Recover userEmail={userEmail} />}
      <DialogActions>
        {alert && <Button onClick={handleAgree} variant={'contained'}>{langForm.agree}</Button>}
        <Button onClick={handleClose} variant={'contained'}>{langForm.close}</Button>
      </DialogActions>
    </Dialog>
  )
}
export default TGGDialog
