import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import SwipeableViews from 'react-swipeable-views'
import {autoPlay} from 'react-swipeable-views-utils'
import {TGGCrown, TGGProfile, TGGShield, TGGShop, TGGStarClick, TGGWallet} from '../components/tggIcons'
import CallToAction from '../components/tggCallTo'
import TGGFooter from '../components/tggFooter'
import Link from '@material-ui/core/Link'
import '../stylesheets/pages/benefits.scss'
import {useSelector} from 'react-redux'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

let imgSteps = [
  {
    imgPath: 'https://files.tegger.io/assets/tegger/images/reactHome/benefits-profile.png',
    label: 'Tegger Profile'
  },
  {
    imgPath: 'https://files.tegger.io/assets/tegger/images/reactHome/benefits-wallet.png',
    label: 'Tegger Wallet'
  },
  {
    imgPath: 'https://files.tegger.io/assets/tegger/images/reactHome/benefits-mp.png',
    label: 'Tegger Marketplace'
  },
]

function SwipeableStepper(theme) {
  const [activeStep, setActiveStep] = React.useState(0);

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    <AutoPlaySwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
      interval={5000}
      animateTransitions={false}
    >
      {imgSteps.map((step, index) => (
        <div key={index}>
          {Math.abs(activeStep - index) <= 2 ? (
            <img src={step.imgPath} alt={step.label} />
          ) : null}
        </div>
      ))}
    </AutoPlaySwipeableViews>
  )
}

export default function () {
  const langBenefits = useSelector(state => state.language.langJson.benefits)
  return (
    <Container maxWidth="lg" className="contentContainer">
      <Box className="background wwTitleBG"/>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6} className="wwTitle wwbTitle">
          <Typography variant={'h3'}>
            {langBenefits.title}
          </Typography>
          <Typography variant={'h2'}>
            {langBenefits.subTitle}
          </Typography>
          <Typography variant={'body1'}>
            {langBenefits.msg}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className="wwTitle wwbTitle relPos">
          <Paper elevation={4} className="benefitPaper">
            <Box className="benefitRow">
              <TGGShield/>
              <Box>
                <Typography variant={'h3'}>
                  {langBenefits.article.title[0]}
                </Typography>
                <Typography variant={'body1'} style={{marginBottom: 10}}>
                  <b>{langBenefits.article.bolds[0]}</b>{langBenefits.article.msg[0]}
                </Typography>
              </Box>
            </Box>
            <Box className="benefitRow">
              <TGGCrown/>
              <Box>
                <Typography variant={'h3'}>
                  {langBenefits.article.title[1]}
                </Typography>
                <Typography variant={'body1'}>
                  <b>{langBenefits.article.bolds[1]}</b>{langBenefits.article.msg[1]}
                </Typography>
              </Box>
            </Box>
            <Box className="benefitRow">
              <TGGStarClick/>
              <Box>
                <Typography variant={'h3'}>
                  {langBenefits.article.title[2]}
                </Typography>
                <Typography variant={'body1'}>
                  <b>{langBenefits.article.bolds[2]}</b>{langBenefits.article.msg[2]}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Box className="background whyBG benefits"/>
      <Grid container>
        <Grid item xs={12} md={6} className="benefitPhone">
          <Box className="benefitsSwipeableSteps">
            <SwipeableStepper />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} className="benefitPhone">
          <Typography variant={'h3'} color={'primary'}>
            {langBenefits.more.title}
          </Typography>
          <Typography variant={'h2'}>
            {langBenefits.more.subTitle}
          </Typography>
          <Typography variant={'body1'}>
            {langBenefits.more.msg}
          </Typography>
          <Paper elevation={0} className="benefitPhonePaper">
            <Box className="benefitRow">
              <TGGProfile/>
              <Box>
                <Link href='/profile'>
                <Typography variant={'h3'}>{langBenefits.more.article.title[0]}</Typography>
                <Typography variant={'body2'}>
                  {langBenefits.more.article.msg[0]}
                </Typography>
                </Link>
              </Box>
            </Box>
            <Box className="benefitRow">
              <TGGWallet/>
              <Box>
                <Link href='/wallet'>
                  <Typography variant={'h3'}>{langBenefits.more.article.title[1]}</Typography>
                  <Typography variant={'body2'}>
                    {langBenefits.more.article.msg[1]}
                  </Typography>
                  </Link>
              </Box>
            </Box>
            <Box className="benefitRow">
              <TGGShop/>
              <Box href="/marketplace">
                <Link href='/marketplce'>
                  <Typography variant={'h3'}>{langBenefits.more.article.title[2]}</Typography>
                  <Typography variant={'body2'}>
                    {langBenefits.more.article.msg[2]}
                  </Typography>
                </Link>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <CallToAction/>
      <TGGFooter/>
    </Container>
  )
}
