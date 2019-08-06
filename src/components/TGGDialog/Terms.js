import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'
import Terms from '../content/terms'

export default function () {
  return (
    <>
      <DialogTitle>
        <Typography variant={'h3'}>Terminos y Condiciones</Typography>
      </DialogTitle>
      <DialogContent>
        <Terms />
      </DialogContent>
    </>
  )
}
