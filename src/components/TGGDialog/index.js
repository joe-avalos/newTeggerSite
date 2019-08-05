import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Terms from './Terms'
import Help from './Help'
import Privacy from './Privacy'
import Navigation from './Navigation'
import Success from './Success'

const TGGDialog = ({open, content, handleClose}) => {

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
      <DialogActions>
        <Button onClick={handleClose} variant={'contained'}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  )
}
export default TGGDialog
