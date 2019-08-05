import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Link from '@material-ui/core/Link'
import withStyles from '@material-ui/styles/withStyles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {TGGPlay, TGGScroll, TGGSecurity, TGGStar} from './tggIcons'
import React from 'react'
import '../stylesheets/components/whyUseTegger.scss'
import {useSelector} from 'react-redux'
import TGGDialog from './TGGDialog'

const BoxWhy = withStyles(theme => ({
  root:{
    '& .MuiButton-root': {
      fontSize:'20px',
      fontWeight:'300',
      color:'#848383',
      lineHeight:'25px',
      marginTop:20,
      '&:hover':{
        color:'#040D14',
        fontWeight:'400'
      },
  },
}
}))(Box)
const TypographyApp = withStyles(theme => ({
  root:{
    fontSize:'17px',
    borderTop:'1px solid black',
    color:'#040D14',
    marginTop:10,
  },
}))(Typography)

export default function () {
  const langWUT = useSelector(state => state.language.langJson.whyUseTegger)
  const [dialog, setDialog] = React.useState({open:false, content:''})
  function handleBrowse() {
    setDialog({open:true, content:'navigation'})
  }
  function handleClose() {
    setDialog({open: false, content: ''})
  }
  return (
    <>
      <Box className="background whyBG"/>
      <Grid container style={{margin:'45px 0'}}>
        <Hidden mdDown>
          <Grid item xs={12} md={6} className="relPos">
            <Box className="whyAnimate"/>
          </Grid>
        </Hidden>

        <Grid item xs={12} md={6} className="whyContent">
          <Typography variant={'h3'} color={'primary'}>
            {langWUT.wut}
          </Typography>
          <Typography variant={'h2'}>
            {langWUT.wutTitle}
          </Typography>
          <Typography variant={'body1'}>
            {langWUT.wutSubTitle}
          </Typography>
          <BoxWhy className="paperAlignSB">
            <Button href="/getin" target="_blank"
              variant={'contained'}
              className="doubleSVG"
              disableTouchRipple
              disableRipple
              disableFocusRipple
            >
              <TGGSecurity/>
              {langWUT.wutLogin}
            </Button>
            <Button href="/perfil" target="_blank"
              variant={'contained'}
              className="doubleSVG"
              disableTouchRipple
              disableRipple
              disableFocusRipple
            >
              <TGGScroll/>
              {langWUT.wutLevel}
            </Button>
            <Button
              variant={'contained'}
              className="doubleSVG"
              disableTouchRipple
              disableRipple
              disableFocusRipple
              onClick={handleBrowse}
            >
              <TGGPlay/>
              {langWUT.wutBrowse}
            </Button>
            <Button href="/marketplace" target="_blank"
              variant={'contained'}
              className="doubleSVG"
              disableTouchRipple
              disableRipple
              disableFocusRipple
            >
              <TGGStar/>
              {langWUT.wutMP}
            </Button>
          </BoxWhy>
          <TypographyApp variant={'body2'}>
            Aprende más sobre Tegger uniéndote o bajando la <Link href="https://play.google.com/store/apps/details?id=org.nativescript.TeggerApp&hl=en_US" target="_blank">aplicación.</Link>
          </TypographyApp>
        </Grid>
      </Grid>
      <TGGDialog open={dialog.open} content={dialog.content} handleClose={handleClose} />
    </>
  )
}
