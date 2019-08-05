import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {TGGPlay, TGGScroll, TGGSecurity, TGGStar} from './tggIcons'
import React from 'react'
import '../stylesheets/components/whyUseTegger.scss'
import {useSelector} from 'react-redux'
import TGGDialog from './TGGDialog'

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
      <Grid container>
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
          <Box className="paperAlignSB">
            <Button
              variant={'contained'}
              className="doubleSVG"
              disableTouchRipple
              disableRipple
              disableFocusRipple
            >
              <TGGSecurity/>
              {langWUT.wutLogin}
            </Button>
            <Button
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
            <Button
              variant={'contained'}
              className="doubleSVG"
              disableTouchRipple
              disableRipple
              disableFocusRipple
            >
              <TGGStar/>
              {langWUT.wutMP}
            </Button>
          </Box>
        </Grid>
      </Grid>
      <TGGDialog open={dialog.open} content={dialog.content} handleClose={handleClose} />
    </>
  )
}
