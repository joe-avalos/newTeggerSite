import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import Terms from './Terms'
import Privacy from './Privacy'

const TGGDialog = ({open, content, handleClose}) => {
  
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll={'paper'}
    >
      {content === 'terms' && <Terms />}
      {content === 'privacy' && <Privacy />}
      <DialogActions>
        <Button onClick={handleClose} variant={'contained'}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  )
}
export default TGGDialog
