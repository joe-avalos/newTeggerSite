import React from 'react'

import DialogTitle from '@material-ui/core/DialogTitle'
import Grid from '@material-ui/core/Grid'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/styles/withStyles'
// TODO change const location
const GridDialog = withStyles(theme => ({
  root:{
    width:500,
    padding:'35px 30px',
    textAlign:'center',
    [theme.breakpoints.down('sm')]: {
      padding:'10px 0 0;',
      display:'flex'
    },
    '& .MuiDialog-paper': {
      margin:'5%',
      },
    '& .MuiDialogTitle-root': {
      paddingBottom:'0'
      },
    '& .MuiTypography-h3': {
      borderBottom:'1px solid #B8B8B8'
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
}))(Grid)

export default function () {
  return (
    <>
      <GridDialog container xs={12}>
        <Grid item xs={12}>
          <DialogTitle>
            <Typography variant={'h3'}>Misión completada</Typography>
          </DialogTitle>
          <DialogContent>
            <Typography variant={'body2'}>¡Acabas de ganar 35 tokens! Para subir al siguiente nivel, navega en sitios afiliados.</Typography>
          </DialogContent>
        </Grid>
      </GridDialog>
    </>
  )
}
