import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import TggEmailInput from './inputs/TggEmailInput'
import '../stylesheets/components/callToAction.scss'
import {useSelector} from 'react-redux'

export default function () {
  const CTALang = useSelector(state => state.language.langJson.callToAction)
  return (
    <>
      <Box className="background CTABG"/>
      <Grid container className="CTAContent">
        <Hidden mdDown>
          <Grid item md={4}/>
        </Hidden>
        <Grid item xs={12} md={8}>
          <Typography variant={'h1'} style={{color: 'white'}}>
            {CTALang.CTATitle}
          </Typography>
          <Typography variant={'subtitle1'} style={{color: 'white', fontWeight: 'lighter', marginBottom: 60}}>
            {CTALang.CTASubTitle}
          </Typography>
          <TggEmailInput/>
        </Grid>
      </Grid>
    </>
  )
  
}
