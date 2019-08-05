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
import {useSelector} from 'react-redux'

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

const ButtonJoinNow = withStyles(theme => ({
  root:{
    width:350,
    marginTop:60,
    [theme.breakpoints.down('sm')]: {
      width:'100%',
    },
  },
}))(Button)

const GridSolucion = withStyles(theme => ({
  root:{
    width:350,
    marginTop:60,
    [theme.breakpoints.down('sm')]: {
      width:'90%',
    },
  },
}))(Grid)

const GridTitle = withStyles(theme => ({
  root:{
    width:'100%',
    [theme.breakpoints.down('sm')]: {
      '&.MuiTypography-h1':{
        fontSize:'3.1rem'
      }

    },
  },
}))(Grid)

export default function () {
  const langHome = useSelector(state => state.language.langJson.home)

  return (
    <Container maxWidth="lg" className="contentContainer">
      <Box className="background homeBG"/>

      <Grid container style={{paddingTop:70}}>
        <Hidden mdDown>
          <Grid item md={1}/>
        </Hidden>
        <GridTitle item sm={12} md={5} className="homeTitle">
          <Typography variant={"h1"}>
            {langHome.title}
          </Typography>
          <Typography variant={"subtitle1"}>
            {langHome.subTitle}
          </Typography>
          <ButtonJoinNow href="/getin">{langHome.registerNow}</ButtonJoinNow>
          <Button href="/marketplace" variant={'contained'}>{langHome.knowOurRewards}</Button>
        </GridTitle>
      </Grid>

      <Grid container>
        <Hidden mdDown>
          <Grid item sm={12} md={5}/>
        </Hidden>

        <Grid item sm={12} md={7}>
          <Paper elevation={4} className='componenteTexto'>
            <Typography variant={"h3"}>
              {langHome.wtmQuestion}
            </Typography>
            <Typography variant={"body1"} style={{color:'#040D14'}}>
              {langHome.wtmAnswer}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container style={{marginTop:'40px'}}>
        <Grid item sm={12} md={6}>
          <StyledPaper elevation={0}>
            <Typography variant={'h3'}>
              {langHome.solutionTitle}
            </Typography>
            <Typography variant={'h2'}>
              {langHome.solution}
            </Typography>
            <Typography variant={'body1'}>
              {langHome.solutionParagraph}
            </Typography>
            <GridSolucion container>
              <Grid item xs={12} md={4}>
                <TGGStar />
                <Box>
                  <Typography variant={'body1'} style={{color:'#3B3B3B'}}>
                    {langHome.rewards}
                  </Typography>
                  <Typography variant={'body2'}>
                    {langHome.rewardsContent}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <TGGScroll />
                <Box>
                  <Typography variant={'body1'} style={{color:'#3B3B3B'}}>
                    {langHome.control}
                  </Typography>
                  <Typography variant={'body2'}>
                    {langHome.controlContent}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <TGGShare />
                <Box>
                  <Typography variant={'body1'} style={{color:'#3B3B3B'}}>
                    {langHome.secure}
                  </Typography>
                  <Typography variant={'body2'}>
                    {langHome.secureContent}
                  </Typography>
                </Box>
              </Grid>
            </GridSolucion>
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
