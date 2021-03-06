import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'

import Privacy from '../content/privacy'

export default function () {
  return (
    <>
      <DialogTitle>
        <Typography variant={'h3'}>Aviso de Privacidad</Typography>
      </DialogTitle>
      <DialogContent>
        <Privacy />
      </DialogContent>
    </>
  )
}
