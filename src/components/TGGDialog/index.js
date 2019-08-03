import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/styles/withStyles'
import Terms from './Terms'
import Privacy from './Privacy'

const TGGDialog = ({open, content, handleClose}) => {

  const DialogActionsInfo = withStyles(theme => ({
    root:{


    }
  }))(DialogActions)

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll={'paper'}
    >
      {content === 'terms' && <Terms />}
      {content === 'privacy' && <Privacy />}
      <DialogActionsInfo>
        <Button onClick={handleClose} variant={'contained'}>Cerrar</Button>
      </DialogActionsInfo>
    </Dialog>
  )
}
export default TGGDialog
