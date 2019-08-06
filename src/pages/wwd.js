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
import {useSelector} from 'react-redux'

export default function() {
  const langWWD = useSelector(state => state.language.langJson.HIW)
  return (
    <Container maxWidth="lg" className="contentContainer">
      <Box className="background wwTitleBG wwd"/>
      <Grid container>
        <Grid item xs={12} md={6} className="wwTitle wwdTitle">
          <Typography variant={'h3'}>
            {langWWD.hiwTitle}
          </Typography>
          <Typography variant={'h2'}>
            {langWWD.hiwSubTitle}
          </Typography>
          <Typography variant={'body1'}>
            {langWWD.hiwDescription}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className="wwTitle relPos">
          <Paper elevation={4}>
            <Typography variant={'h3'}>
              {langWWD.hiwArticle.title[0]}
            </Typography>
            <Typography variant={'body1'} style={{marginBottom: 10}}>
              <b>{langWWD.hiwArticle.bolds[0]}</b>{langWWD.hiwArticle.args[0]}
            </Typography>
            <img
              src="https://files.tegger.io/assets/tegger/images/reactHome/tegger-explain.svg"
              alt="Tegger Explain"
              style={{height: 100, display: 'block', margin: '0 auto'}}
            />
            <Typography variant={'h3'}>
              {langWWD.hiwArticle.title[1]}
            </Typography>
            <Typography variant={'body1'}>
              <b>{langWWD.hiwArticle.bolds[1]}</b>{langWWD.hiwArticle.args[1]}
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
