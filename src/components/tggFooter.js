import React from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import TggEmailInput from './inputs/TggEmailInput'
import {FBLogo, TGGMailIcon, TWLogo} from './tggIcons'
import '../stylesheets/components/tggFooter.scss'
import TGGDialog from './TGGDialog'

export default function () {
  const [dialog, setDialog] = React.useState({open:false, content:''})
  function handleTerms() {
    setDialog({open: true, content: 'terms'})
  }
  function handlePrivacy() {
    setDialog({open:true, content:'privacy'})
  }
  function handleNavigation() {
    setDialog({open:true, content:'navigation'})
  }
  function handleHelp() {
    setDialog({open:true, content:'help'})
  }
  function handleClose() {
    setDialog({open: false, content: ''})
  }
  return(
    <>
      <Box className="background footerBG" />
      <Grid container>
        <Grid item xs={12} md={5} className="footerContent">
          <img src="https://files.tegger.io/assets/tegger/images/tegger-logo.svg" alt="Tegger Logo" className="tggLogo"/>
          <TggEmailInput />
        </Grid>
        <Hidden mdDown>
          <Grid item md={3} />
        </Hidden>
        <Grid item xs={12} md={3} className="footerContent">
          <Box className="socials">
            <Link href="mailto:info@tegger.io">
            <TGGMailIcon/>
            </Link>
            <Link href="https://facebook.com/TeggerProject">
            <FBLogo/>
            </Link>
            <Link href="https://twitter.com/TeggerProject">
            <TWLogo/>
            </Link>
          </Box>
          <Typography variant={'body1'} component="p">
            Mantente en contacto con nosotros.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container  className="footerNav">
            <Grid item xs={12} md={9}>
              <Breadcrumbs separator="|" component="nav">
                <Typography variant={'body2'} onClick={handleNavigation}>
                  Contactar
                </Typography>
                <Typography variant={'body2'} onClick={handlePrivacy}>
                  Política de Privacidad
                </Typography>
                <Typography variant={'body2'} onClick={handleTerms}>
                  Términos y Condiciones
                </Typography>
                <Typography variant={'body2'} onClick={handleHelp}>
                  FAQ's
                </Typography>
              </Breadcrumbs>
            </Grid>
            <Grid item xs={12} md={2}>
              <Typography className="copyright">
                &copy; Tegger 2019
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <TGGDialog open={dialog.open} content={dialog.content} handleClose={handleClose} />
    </>
  )
}
