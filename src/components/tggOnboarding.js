import React from 'react'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import OnBoardingForm from './forms/onboardingForm'
import withStyles from '@material-ui/styles/withStyles'

import '../stylesheets/components/tggOnboarding.scss'
import {useSelector} from 'react-redux'

const OnboardingGrid = withStyles(theme => ({
  root: {
    marginTop: 70,
    marginBottom: 30,
    overflowX: 'visible',
    [theme.breakpoints.down('sm')]: {
      marginTop:10,
    },
    '& .MuiTypography-h1': {
      color: 'white',
    },
    '& .MuiTypography-body1': {
      color: 'white',
    },

    '& .MuiButton-root':{
      backgroundColor:'#FFFFFF',
      color:'#FF7825',
      marginTop:40,
    },
  }
}))(Grid)

export default function () {
  const langOnboarding = useSelector(state => state.language.langJson.onboarding)
  return (
    <>
      <Grid container>
      <Box className="background onboardingBG"/>
        <Hidden mdDown>
          <Grid item md={1}/>
        </Hidden>
          <OnboardingGrid item xs={12} md={6} style={{height:'500px'}}>
            <Typography variant={'h1'}>
              {langOnboarding.OBTitle}
            </Typography>
            <Typography variant={'body1'}>
              {langOnboarding.OBSubTitle}
            </Typography>
            {/*<Button>EMPEZAR</Button> TODO */}
          </OnboardingGrid>
        <Grid container style={{marginTop:'50px',display:'flex'}}>
        <Hidden mdDown>
          <Grid item md={3}/>
        </Hidden>
          <Grid item xs={12} md={6} >
            <OnBoardingForm />
          </Grid>
          <Hidden mdDown>
            <Grid item md={3}/>
          </Hidden>
        </Grid>
      </Grid>
    </>
  )
}
