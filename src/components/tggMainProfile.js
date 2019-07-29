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
import {loggedFetchTotalAnswers, loggedPreferenceChange} from '../modules/actions/loggedActions'

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

const QuestionPaper = withStyles(()=>({
  root:{
    width: '23.90625em',
    height: '18.749375em',
    borderRadius: 12
  }
}))(Paper)

const QuestionGrid = withStyles(() => ({
  root:{
    marginBottom: '1.5em',
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
}))(Grid)

const StaticProgress = withStyles(() => ({
  static:{
    position: 'absolute'
  }
}))(CircularProgress)

const TokenBalanceTypography = withStyles(() => ({
  body1:{
    color: 'blue'
  }
}))(Typography)

export default function ({profile}) {
  const [tabValue, setTabValue] = React.useState(profile.gamification)
  const genders = data.genreTitles
  const SRQuestions = data.selfReportedQuestions
  const dispatch = useDispatch()
  let answersTotals = useSelector(state => state.logged.answersTotals)
  let answersIsLoading = useSelector(state => state.logged.answersIsLoading)
  let prefsIsLoading = useSelector(state => state.logged.prefsIsLoading)
  React.useEffect(() => {
    if (_.isEmpty(answersTotals)){
      dispatch(loggedFetchTotalAnswers(profile.uuid))
    }
  })
  function search(nameKey, myArray = answersTotals){
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i][nameKey]) {
        return parseInt(myArray[i][nameKey])
      }
    }
  }
  function handlePrefChange(pref){
    dispatch(loggedPreferenceChange({
      location: pref === 'location' ? !profile.preferences.location : profile.preferences.location,
      tracking: pref === 'tracking' ? !profile.preferences.tracking : profile.preferences.tracking
    },
      profile.uuid
      ))
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
    //Paper con elevación para crear los cuadros de las preguntas autoreportadas
    return (
      <QuestionPaper elevation={4} key={index}>
        <Typography variant={'h3'}>{genders[profile.genre][index].titleEn}</Typography>
        {item.modules.map((modItem, modIndex) => {
          let percentage = getCompletedPercentage(item, index, true)
          return (
            <Button variant={'contained'} onClick={() => handleQuestionClick(modItem.code)} key={modIndex}>
              <Avatar src={genders[profile.genre][index].avatarImg} />
              <Typography variant={'body1'}>{modItem.name}</Typography>
              <StaticProgress variant={'static'} value={percentage} />
            </Button>
          )
        })}
      </QuestionPaper>
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
                  {/*Profile Header*/}
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      {/*Profile Token Balnce*/}
                      <TokenBalanceTypography variant={'body1'}>
                        {profile.tokenBalance}
                      </TokenBalanceTypography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      {/*Profile referrals earnings*/}
                      <Typography variant={'body1'}>
                        {profile.genre}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    {prefsIsLoading ? <CircularProgress style={{color: 'white'}} /> :
                      <>
                        <Grid item xs={12} md={6}>
                          {/*Profile location switch*/}
                          <Typography variant={'body1'}>Location</Typography>
                          <Switch
                            checked={profile.preferences.location}
                            onChange={() => handlePrefChange('location')}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          {/*Profile tracking switch*/}
                          <Typography variant={'body1'}>Browsing</Typography>
                          <Switch
                            checked={profile.preferences.tracking}
                            onChange={() => handlePrefChange('tracking')}
                          />
                        </Grid>
                      </>
                      }
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {/*Profile gamification bar */}
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
                        <StaticProgress variant={'static'} value={percentage} />
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
        {/*Preguntas niveles*/}
        <Grid item xs={12}>
          <Grid container>
            <Hidden mdDown>
              <Grid item md={4} />
            </Hidden>
            <QuestionGrid item xs={12} md={4}>
              {SRQuestions.map((item, index) => {
                if (tabValue === index) {
                  return (
                    srPaper(item,index)
                  )
                }
                return null
              })}
            </QuestionGrid>
            <Hidden mdDown>
              <Grid item md={4} />
            </Hidden>
            <Hidden mdDown>
              {SRQuestions.map((item, index) => {
                if (tabValue !== index) {
                  return (
                    <QuestionGrid item xs={6} key={index}>
                      {srPaper(item, index)}
                    </QuestionGrid>
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
