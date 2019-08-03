import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/styles/withStyles'

import Privacy from '../content/privacy'

const BoxDialog = withStyles({
  root:{
    width:500,
    padding:'35px 30px',
    textAlign:'center',
    '& .MuiDialogTitle-root': {
      paddingBottom:'0'
      },
    '& .MuiTypography-body2': {
      fontSize:'1.25rem',
      color:'#3B3B3B',
      },
    '& .MuiTypography-body3': {
      fontSize:'40px',
      color:'#848383',
      },
  }
})(Box)

export default function () {
  return (
    <>
    <BoxDialog style={{width:500}}>
      <DialogTitle>
      <TGGStar/>
        <Typography variant={'h3'}>Mi navegación</Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant={'body2'}>Para obtener más puntos y subir de nivel quiero navegar en:</Typography>
        <Button>CC</Button>
        <Button>CCN</Button>
        <Typography variant={'body3'}>*Recuerda iniciar sesión en el sitio.</Typography>

      </DialogContent>
    </BoxDialog>
    </>
  )
}
