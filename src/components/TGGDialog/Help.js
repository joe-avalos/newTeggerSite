import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'

import Help from '../content/help'

export default function () {
  return (
    <>
      <DialogTitle>
        <Typography variant={'h3'}>FAQ's</Typography>
      </DialogTitle>
      <DialogContent>
        <Help />
      </DialogContent>
    </>
  )
}
