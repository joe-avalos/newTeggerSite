import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import withStyles from '@material-ui/styles/withStyles'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CallToAction from '../components/TGGCallTA'
import TGGFooter from '../components/tggFooter'
import '../stylesheets/pages/wwa.scss'
import {TGGCloudLock, TGGHeart, TGGStar, TGGStarClick} from '../components/Icons'

const ExpansionPanel = withStyles({
  root: {
    borderTop: '1px solid #B8B8B8',
    boxShadow: 'none',
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {}
})(MuiExpansionPanel)

const ExpansionPanelSummary = withStyles(theme => ({
  root: {
    marginBottom: -1,
    minHeight: 56,
    paddingLeft: 0,
    '&$expanded': {
      minHeight: 56
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
      '& p': {
        color: theme.palette.primary.main,
      }
    },
  },
  expanded: {},
}))(MuiExpansionPanelSummary)

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(4, 0),
    borderTop: '1px solid #B8B8B8'
  }
}))(MuiExpansionPanelDetails)

function ControlledExpansionPanels() {
  const [expanded, setExpanded] = React.useState('panel1');
  
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  
  return (
    <>
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography variant={'body1'}>Falta de conocimiento</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant={'body1'}>
            Los sitios tienen poco conocimiento de su audiencia lo cual hace que no puedan curar correctamente contenido
            ni vender espacios publicitario de forma óptima.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography variant={'body1'}>Pocos Beneficios</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography variant={'body1'}>
            Los usuarios reciben muy poco a cambio de navegar, aunque le generan un valor importante a los sitios y
            anunciantes.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </>
  );
}

export default function wwa() {
  return (
    <Container maxWidth="lg" className="contentContainer">
      <Box className="background wwTitleBG"/>
      <Grid container>
        <Grid item xs={12} md={6} className="wwTitle wwaTitle">
          <Typography variant={'h3'}>
            ¿Qué hacemos?
          </Typography>
          <Typography variant={'h2'}>
            Tecnología que ayuda a recompensar a usuarios, sitios web y creadores de contenido por la navegación de los
            usuarios.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className="wwTitle wwaTitle relPos">
          <Paper elevation={4}>
            <Typography variant={'h3'}>
              El Problema
            </Typography>
            <Typography variant={'h2'} style={{marginBottom: 10}}>
              Tegger es una plataforma innovadora diseñada para resolver un problema persistente en el ecosistema
              digital.
            </Typography>
            <ControlledExpansionPanels/>
          </Paper>
        </Grid>
      </Grid>
      <Box className="background wwaOrangeBG"/>
      <Grid container>
        <Hidden mdDown>
          <Grid item md={1}/>
        </Hidden>
        <Grid item xs={12} md={5} className="wwaOrange">
          <Typography variant={'h2'} style={{color: 'white'}}>
            <i>Tegger está creando una economía de datos justa que reconoce el rol de los usuarios y sitios web.</i>
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Hidden mdDown>
          <Grid item md={2} />
        </Hidden>
        <Grid item xs={12} md={8} className="wwaFunctions">
          <Grid container>
            <Grid item xs={12}>
              <Typography variant={'h3'}>Funcionalidades</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={4}>
                <TGGCloudLock/>
                <Typography variant={'body2'}>
                  Escoge cuando prender y apagar el rastreo.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={4}>
                <TGGStar />
                <Typography variant={'body2'}>
                  Gana recompensas adicionales por llenar misiones.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={4}>
                <TGGHeart/>
                <Typography variant={'body2'}>
                  Escoge recompensas.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={4}>
                <TGGStarClick/>
                <Typography variant={'body2'}>
                  Recompensa a tus creadores de contenido.<br/>(Próximamente)
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction />
      <TGGFooter />
    </Container>
  )
}
