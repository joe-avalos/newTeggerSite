import React from 'react'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Switch from '@material-ui/core/Switch'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'
import {useDispatch, useSelector} from 'react-redux'
import {push} from 'connected-react-router'
import withStyles from '@material-ui/styles/withStyles'
import _ from 'lodash'

import data from './data/selfReportedData'
import {loggedFetchAnswers} from '../modules/actions/loggedActions'

import '../stylesheets/components/tggMainProfile.scss'

const ImgAvatar = withStyles(() =>({
  root:{
 background: '#ededed',
 border: '5px solid white',
 width: '150px',
 height: '150px',
 borderRadius: '50%',
 boxShadow: '0px 10px 12px #00000026',
 margin:'auto',
 }
}))(Avatar)

const AvatarTypography = withStyles(() =>({
  root:{
    margin: '0 .5em',
    textTransform: 'uppercase',
    fontFamily: 'Exo',
    fontSize: '1.125em',
    fontWeight: 'bold',
    color:'#FFFFFF',
    textAlign:'center',
    marginTop:'15px'
 }
}))(Typography)



export default function ({profile}) {
  const [tabValue, setTabValue] = React.useState(profile.gamification)
  const genders = data.genreTitles
  const SRQuestions = data.selfReportedQuestions
  const dispatch = useDispatch()
  let answers = useSelector(state => state.logged.answers)
  React.useEffect(() => {
    if (_.isEmpty(answers)){
      dispatch(loggedFetchAnswers(profile.uuid))
    }
  })
  function search(nameKey, myArray = answers){
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i][nameKey]) {
        return parseInt(myArray[i][nameKey])
      }
    }
  }
  function handlePrefChange(){

  }
  function handleTabChange(e, v) {
    setTabValue(v)
  }
  function handleQuestionClick(qCode) {
    dispatch(push('/question/'+qCode))
  }
  function getCompletedPercentage(item, index, mod = false) {
    if (SRQuestions[index]) {
      let qLength = SRQuestions[index].modules.length
      let levelQuestions = 0
      let modQuestions = 0
      let answered
      for (let i = 0; i < qLength; i++) {
        let modCode = SRQuestions[index].modules[i].code
        modQuestions = SRQuestions[index].modules[i].questions.length
        levelQuestions = levelQuestions + modQuestions
        answered = search(modCode)
        answered = answered ? answered : 0
      }
      let totalQuestions = mod ? modQuestions : levelQuestions
      return (answered / totalQuestions) * 100
    }
  }
  function srPaper(item, index) {
    return (
      <Paper elevation={4} key={index}>
        <Typography variant={'h3'}>{genders[profile.genre][index].titleEn}</Typography>
        {item.modules.map((modItem, modIndex) => {
          let percentage = getCompletedPercentage(item, index, true)
          return (
            <Button variant={'contained'} onClick={() => handleQuestionClick(modItem.code)} key={modIndex}>
              <Avatar src={genders[profile.genre][index].avatarImg} />
              <Typography variant={'body1'}>{modItem.name}</Typography>
              <CircularProgress variant={'static'} value={percentage} />
            </Button>
          )
        })}
      </Paper>
    )
  }
  return (
    <>
      <Grid container>

        <Hidden mdDown>
          <Grid item xs={3}/>
        </Hidden>

        <Grid item xs={12} md={6} className="info">

          <Grid container className="2">

            <Grid item xs={12} md={4}>
              <ImgAvatar src="https://files.tegger.io/assets/tegger/images/reactProfile/dame.svg" />
              <AvatarTypography> {profile.name} </AvatarTypography>
            </Grid>

            <Grid item xs={12} md={8} className="infoText">
              <Grid container>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      {profile.tokenBalance}
                    </Grid>

                    <Grid item xs={12} md={6}>
                      {profile.genre}
                    </Grid>
                  </Grid>

                </Grid>


                <Grid item xs={12} className="infoTracking">
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <Typography variant={'body1'}>Location</Typography>
                      <Switch
                        checked={profile.preferences.location}
                        onChange={handlePrefChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography variant={'body1'}>Browsing</Typography>
                      <Switch
                        checked={profile.preferences.tracking}
                        onChange={handlePrefChange}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>


        <Grid item xs={12}>
          <AppBar position={'static'} style={{borderRadius: '60px'}}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant={'scrollable'}
              scrollButtons={'auto'}
              >
              {genders[profile.genre].map((item, index) => {
                let percentage = getCompletedPercentage(item, index)
                if (item.level !== 0) {
                  return (
                    <Tab key={index} label={
                      <>
                        <Avatar src={item.avatarImg} />
                        <Typography variant={'body2'}>{item.titleEn}</Typography>
                        <CircularProgress variant={'static'} value={percentage} />
                      </>
                    } />
                  )
                }
                return null
              })
              }
            </Tabs>
          </AppBar>
        </Grid>

                                           // Prguntas niveles

        <Grid item xs={12}>
          <Grid container className="preguntasNivelesContainer">
            <Grid item xs={12} className="preguntasNiveles">
              {SRQuestions.map((item, index) => {
                if (tabValue === index) {
                  return (
                    srPaper(item,index)
                  )
                }
                return null
              })}
            </Grid>

            <Hidden mdDown>
              {SRQuestions.map((item, index) => {
                if (tabValue !== index) {
                  return (
                    <Grid item xs={6} key={index}>
                      {srPaper(item, index)}
                    </Grid>
                  )
                }
                return null
              })}
            </Hidden>


          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
