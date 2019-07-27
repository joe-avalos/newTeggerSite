import React from 'react'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import OnBoardingForm from '../components/forms/onboardingForm'


export default function () {
  return (
    <>
      <Grid container>
        <Hidden mdDown>
          <Grid item xs={12} md={1}/>
        </Hidden>
        <Grid item xs={12} md={5}>
          <Typography variant={'h1'}>
            ¡Bienvenido al mundo Tegger!
          </Typography>
          <Typography variant={'body1'}>
            Tegger usa un login que te permite elegir qué tipos de datos deseas compartir e ingresar información
            adicional. Recibes tokens por tus interacciones con contenido y por compartir información autoinformada que
            puede cambiarse por recompensas.
          </Typography>
          <OnBoardingForm />
        </Grid>
      </Grid>
    </>
  )
}
