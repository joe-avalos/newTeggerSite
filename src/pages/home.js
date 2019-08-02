import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import withStyles from '@material-ui/styles/withStyles'
import {TGGScroll, TGGStar, TGGShare} from '../components/tggIcons'
import CallToAction from '../components/tggCallTo'
import TGGFooter from '../components/tggFooter'
import WhyUseTegger from '../components/tggWhyUse'


import '../stylesheets/pages/home.scss'

const StyledPaper = withStyles({
  root:{
    '& img':{
      maxHeight: 72,
      marginBottom: 10
    },
    '& .MuiGrid-item':{
      marginTop: 40
    }
  }
})(Paper)

const ButtonUnete = withStyles({
  root:{
    width:350,
    marginTop:60,

  }
  
})(Button)

export default function home() {
  return (
    <Container maxWidth="lg" className="contentContainer">
      <Box className="background homeBG"/>

      <Grid container style={{paddingTop:70}}>
        <Hidden mdDown>
          <Grid item md={1}/>
        </Hidden>
        <Grid item sm={12} md={5} className="homeTitle">
          <Typography variant={"h1"}>
            Recibe recompensas por navegar
          </Typography>
          <Typography variant={"subtitle1"}>
            Ten control sobre la información que compartes y recibe recompensas por ella.
          </Typography>
          <ButtonUnete>¡ÚNETE PARA GANAR!</ButtonUnete>
          <Button variant={'contained'}>Conoce las recompensas</Button>
        </Grid>
      </Grid>

      <Grid container>
        <Hidden mdDown>
          <Grid item sm={12} md={5}/>
        </Hidden>

        <Grid item sm={12} md={7}>
          <Paper elevation={4} className='componenteTexto'>
            <Typography variant={"h3"}>
              ¿Por qué esto importa?
            </Typography>
            <Typography variant={"body1"} style={{color:'#040D14'}}>
              En Tegger sabemos que tú como usuario juegas un papel muy valioso para los sitios y anunciantes.
              Nosotros lo reconocemos ofreciéndote beneficios por navegar.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container style={{marginTop:'40px'}}>
        <Grid item sm={12} md={6}>
          <StyledPaper elevation={0}>
            <Typography variant={'h3'}>
              La Solución
            </Typography>
            <Typography variant={'h2'}>
              Tegger es una plataforma tecnológica que te permite tomar un rol clave en la cadena de valor de los medios
              digitales.
            </Typography>
            <Typography variant={'body1'}>
              Nosotros distribuimos el valor de la navegación a los sitios creadores de contenido para que puedan seguir
              creando contenido de calidad.
            </Typography>
            <Grid container>
              <Grid item xs={12} md={4}>
                <TGGStar />
                <Box>
                  <Typography variant={'body1'} style={{color:'#3B3B3B'}}>
                    Recompensas
                  </Typography>
                  <Typography variant={'body2'}>
                    Recibe recompensas por navegar y llenar encuestas
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <TGGScroll />
                <Box>
                  <Typography variant={'body1'} style={{color:'#3B3B3B'}}>
                    Control
                  </Typography>
                  <Typography variant={'body2'}>
                    Elige qué y cuándo quieres compartir
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <TGGShare />
                <Box>
                  <Typography variant={'body1'} style={{color:'#3B3B3B'}}>
                    Seguridad
                  </Typography>
                  <Typography variant={'body2'}>
                    Navega seguro en nuestros sitios afiliados
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </StyledPaper>
        </Grid>
        <Hidden mdDown>
          <Grid item sm={12} md={6} className="relPos">
            <Box className="background solutionBG" />
          </Grid>
        </Hidden>
      </Grid>
      <WhyUseTegger />
      <CallToAction />
      <TGGFooter />
    </Container>
  )
}
