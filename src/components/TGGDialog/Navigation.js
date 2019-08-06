import React from 'react'

import DialogTitle from '@material-ui/core/DialogTitle'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import DialogContent from '@material-ui/core/DialogContent'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/styles/withStyles'

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

const ButtonNavigation = withStyles(theme => ({
  root:{
    alignItems:'center',
    '& .MuiButton-root': {
      backgroundImage:'url("https://files.tegger.io/assets/tegger/images/reactHome/CCLogo.png")',
      width:120,
      height:120,
      borderRadius:'50%',
      //backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize:'60%',
      margin:'20px 10px',
      backgroundColor: 'transparent',
      border: '1px solid black',
      [theme.breakpoints.down('sm')]: {
        width:95,
        height:95,
      },
    },
    '& .MuiButton-root:last-of-type': {
      backgroundImage:'url("https://files.tegger.io/assets/tegger/images/reactHome/CCNewsLogo.png")',
    }
  }
}))(Box)

export default function () {
  return (
    <>
      <GridDialog container xs={12}>
        <Grid item xs={12}>
          <DialogTitle>
            <Typography variant={'h3'}>Mi navegación</Typography>
          </DialogTitle>
          <DialogContent>
            <Typography variant={'body2'}>Para obtener más puntos y subir de nivel quiero navegar en:</Typography>
              <ButtonNavigation>
                <Button href="https://culturacolectiva.com/" />
                <Button href="https://news.culturacolectiva.com/" />
              </ButtonNavigation>
            <Typography variant={'body3'}>*Recuerda iniciar sesión en el sitio.</Typography>
          </DialogContent>
        </Grid>
      </GridDialog>
    </>
  )
}
