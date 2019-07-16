import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {TGGPlay, TGGScroll, TGGSecurity, TGGStar} from './Icons'
import React, {Component} from 'react'
import '../stylesheets/components/whyUseTegger.scss'

export default class whyUseTegger extends Component {
  
  render() {
    return (
      <>
        <Box className="background whyBG"/>
        <Grid container>
          <Hidden mdDown>
            <Grid item xs={12} md={6} className="relPos">
              <Box className="whyAnimate"/>
            </Grid>
          </Hidden>
          <Grid item xs={12} md={6} className="whyContent">
            <Typography variant={'h3'} color={'primary'}>
              ¿Por qué usar Tegger?
            </Typography>
            <Typography variant={'h2'}>
              Navega o cuéntanos de ti mismo para ganar recompensas.
            </Typography>
            <Typography variant={'body1'}>
              Tegger te ofrece las herramientas para escoger.
            </Typography>
            <Box className="paperAlignSB">
              <Button
                variant={'contained'}
                className="doubleSVG"
                disableTouchRipple
                disableRipple
                disableFocusRipple
              >
                <TGGSecurity/>
                Inicia sesión o registrate
              </Button>
              <Button
                variant={'contained'}
                className="doubleSVG"
                disableTouchRipple
                disableRipple
                disableFocusRipple
              >
                <TGGScroll/>
                Sube de nivel contestando cuestionarios
              </Button>
              <Button
                variant={'contained'}
                className="doubleSVG"
                disableTouchRipple
                disableRipple
                disableFocusRipple
              >
                <TGGPlay/>
                Navega en sitios afiliados
              </Button>
              <Button
                variant={'contained'}
                className="doubleSVG"
                disableTouchRipple
                disableRipple
                disableFocusRipple
              >
                <TGGStar/>
                Intercambia tus recompensas en el Marketplace
              </Button>
            </Box>
          </Grid>
        </Grid>
      </>
    )
  }
}
