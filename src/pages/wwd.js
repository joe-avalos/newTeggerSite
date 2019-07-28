import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import WhyUseTegger from '../components/tggWhyUse'
import CallToAction from '../components/tggCallTo'
import TGGFooter from '../components/tggFooter'
import '../stylesheets/pages/wwd.scss'

export default function wwd() {
  return (
    <Container maxWidth="lg" className="contentContainer">
      <Box className="background wwTitleBG wwd"/>
      <Grid container>
        <Grid item xs={12} md={6} className="wwTitle wwdTitle">
          <Typography variant={'h3'}>
            ¿Cómo funciona?
          </Typography>
          <Typography variant={'h2'}>
            Tegger recopila la información que decides compartir a través de tus interacciones con sitios de aliados.
          </Typography>
          <Typography variant={'body1'}>
            Tegger usa un login para permitirte escoger el tipo de información que deseas compartir. Recibes tokens por
            interactuar con contenido de nuestros aliados así como compartir información optativa adicional la cual
            puedes canjear por recompensas.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className="wwTitle relPos">
          <Paper elevation={4}>
            <Typography variant={'h3'}>
              Información adicional optativa
            </Typography>
            <Typography variant={'body1'} style={{marginBottom: 10}}>
              <b>Escoge</b> qué tipo de información quieres compartir. Tegger rastreará únicamente los puntos que desees
              compartir.
            </Typography>
            <img
              src="https://files.tegger.io/assets/tegger/images/reactHome/tegger-explain.svg"
              alt="Tegger Explain"
              style={{height: 100, display: 'block', margin: '0 auto'}}
            />
            <Typography variant={'h3'}>
              Modelo de recompensas
            </Typography>
            <Typography variant={'body1'}>
              <b>Recibe tokens</b> en tiempo real cada vez que compartas tu información completando cuestionarios o
              navegando en sitios de nuestros aliados. Entre más información recibas, más tokens recibirás.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <WhyUseTegger/>
      <CallToAction/>
      <TGGFooter/>
    </Container>
  )
}
