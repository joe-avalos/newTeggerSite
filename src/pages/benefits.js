import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import SwipeableViews from 'react-swipeable-views'
import {autoPlay} from 'react-swipeable-views-utils'
import {TGGCrown, TGGProfile, TGGShield, TGGShop, TGGStarClick, TGGWallet} from '../components/Icons'
import CallToAction from '../components/TGGCallTA'
import TGGFooter from '../components/tggFooter'
import '../stylesheets/pages/benefits.scss'

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

export default function benefits() {
  return (
    <Container maxWidth="lg" className="contentContainer">
      <Box className="background wwTitleBG"/>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6} className="wwTitle wwbTitle">
          <Typography variant={'h3'}>
            Beneficios
          </Typography>
          <Typography variant={'h2'}>
            ¡Recibe tokens simplemente por unirte a Tegger!
          </Typography>
          <Typography variant={'body1'}>
            Obtén tokens que puedes intercambiar por atractivas recompensas dentro de nuestro marketplace. Cada vez que
            navegas como miembro de Tegger recibirás tokens adicionales y estos aumentan aún más cuando completes las
            misiones en tu perfil.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className="wwTitle wwbTitle relPos">
          <Paper elevation={4} className="benefitPaper">
            <Box className="benefitRow">
              <TGGShield/>
              <Box>
                <Typography variant={'h3'}>
                  Obtén
                </Typography>
                <Typography variant={'body1'} style={{marginBottom: 10}}>
                  ¡<b>Gana 50 tokens</b> por inscribirte!
                </Typography>
              </Box>
            </Box>
            <Box className="benefitRow">
              <TGGCrown/>
              <Box>
                <Typography variant={'h3'}>
                  Descubre
                </Typography>
                <Typography variant={'body1'}>
                  ¡<b>Beneficios exclusivos</b>, desde tiempo aire y boletos de cine, hasta crédito para pedir comida y
                  transporte
                  privado!
                </Typography>
              </Box>
            </Box>
            <Box className="benefitRow">
              <TGGStarClick/>
              <Box>
                <Typography variant={'h3'}>
                  Navega
                </Typography>
                <Typography variant={'body1'}>
                  <b>Navega</b> y gana
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
            Descubre más
          </Typography>
          <Typography variant={'h2'}>
            Funcionalidades
          </Typography>
          <Typography variant={'body1'}>
            Tegger cuenta con varias herramientas para que puedas maximizar tus beneficios y usuarlos de manera
          </Typography>
          <Paper elevation={0} className="benefitPhonePaper">
            <Box className="benefitRow">
              <TGGProfile/>
              <Box>
                <Typography variant={'h3'}>Perfil</Typography>
                <Typography variant={'body2'}>
                  En esta sección puedes llenar misiones de información para subir de nivel y obtener
                  mayores beneficios por navegar. Además puedes controlar el monitoreo del
                </Typography>
              </Box>
            </Box>
            <Box className="benefitRow">
              <TGGWallet/>
              <Box>
                <Typography variant={'h3'}>Wallet</Typography>
                <Typography variant={'body2'}>
                  Aquí puedes revisar tu balance de tokens, cómo los haz ganado y los rewards por los que los haz
                  redimido.
                </Typography>
              </Box>
            </Box>
            <Box className="benefitRow">
              <TGGShop/>
              <Box>
                <Typography variant={'h3'}>Marketplace</Typography>
                <Typography variant={'body2'}>
                  Intercambia tus tokens por beneficios exclusivos en el marketplace
                </Typography>
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
