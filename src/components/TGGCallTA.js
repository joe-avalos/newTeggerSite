import React, {Component} from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Hidden from  '@material-ui/core/Hidden'
import Typography from  '@material-ui/core/Typography'
import TggInput from './tggInput'
import '../stylesheets/components/callToAction.scss'

export default class TGGCallTA extends Component{
  
  render() {
    return(
      <>
        <Box className="background CTABG" />
        <Grid container className="CTAContent">
          <Hidden mdDown>
            <Grid item md={4} />
          </Hidden>
          <Grid item xs={12} md={8} style={{}}>
            <Typography variant={'h1'} style={{color:'white'}}>
              ¡Únete a Tegger ahora!
            </Typography>
            <Typography variant={'subtitle1'} style={{color: 'white', fontWeight: 'lighter', marginBottom: 60}}>
              Comienza a recibir recompensas por navegar
            </Typography>
            <TggInput />
          </Grid>
        </Grid>
      </>
    )
  }
}
