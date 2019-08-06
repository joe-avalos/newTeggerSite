import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'
import {useSelector} from 'react-redux'

export default function ({userEmail}) {
  const langForm = useSelector(state => state.language.langJson.forms)
  return (
    <>
      <DialogTitle>
        <Typography variant={'h3'}>{langForm.recoverPassword}</Typography>
      </DialogTitle>
      <DialogContent>
        {langForm.recoverDialog}{userEmail}
      </DialogContent>
    </>
  )
}
