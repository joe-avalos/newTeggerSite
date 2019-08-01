import React from 'react'
//Material UI Imports
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
import Box from '@material-ui/core/Box'
import withStyles from '@material-ui/styles/withStyles'
//Third party library imports
import {useDispatch, useSelector} from 'react-redux'
import {push} from 'connected-react-router'
import _ from 'lodash'
//Tegger app import
import data from './data/selfReportedData'
import {loggedFetchTotalAnswers, loggedPreferenceChange} from '../modules/actions/loggedActions'
import '../stylesheets/components/tggMainProfile.scss'
//Material UI Component Overrides
const HeaderAvatar = withStyles({
  root: {
    background: '#ededed',
    border: '5px solid white',
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    boxShadow: '0px 10px 12px #00000026',
    margin: 'auto',
    '& + .MuiTypography-root':{
      margin: '0 .5em',
      textTransform: 'uppercase',
      fontFamily: 'Exo',
      fontSize: '1.125em',
      fontWeight: 'bold',
      color: '#FFFFFF',
      textAlign: 'center',
      marginTop: '15px'
    }
  }
})(Avatar)

const StaticProgress = withStyles({
  static: {
    position: 'absolute',
    top: 1,
    color: '#BFBFBF'
  }
})(CircularProgress)

const TokenBalanceTypography = withStyles({
  body1: {
    color: 'white',
    fontSize: '2.25rem',
    fontWeight: '600'
  }
})(Typography)

const PanelTypography = withStyles({
  h3: {
    color: 'white',
    fontSize: '1.125rem'
  }
})(Typography)

const UserNameTypography = withStyles({
  body1: {
    color: 'white',
    fontFamily: 'Encode Sans Semi Expanded',
    fontSize: '1.5rem',
    fontWeight: '400'
  }
})(Typography)

const GamificationAppBar = withStyles({
  root:{
    zIndex: 1099,
    borderRadius: '70px',
    height: '140px',
    margin: 'auto',
    width: '755px',
    padding: '20px',
    position: 'relative',
    '& .MuiBox-root':{
      width: '80%',
      height: 6,
      position: 'absolute',
      border: '1px solid #dadada',
      top: '42%',
      left: '9%'
    },
    '& .MuiTabs-indicator':{
      display: 'none'
    },
    '& .MuiAvatar-root':{
      width: 60,
      height: 60,
      backgroundColor: '#F4F4F4',
      border: '1px solid #C3C3C3',
    },
    '& .MuiTypography-body2':{
      marginTop: 4,
      fontSize: '0.875rem',
      textTransform: 'capitalize',
      fontFamily: 'Exo',
    },
    '& .Mui-selected':{
      '& .MuiTypography-body2': {
        textTransform: 'uppercase',
        marginTop: 10,
        fontSize: '1.125rem',
        color: '#5F5F5F',
      },
      '& .MuiAvatar-root': {
        transform: 'scale(1.1)'
      }
    }
  }
})(AppBar)

const QuestionGrid = withStyles({
  root: {
    marginBottom: '1.5em',
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
})(Grid)

const QuestionPaper = withStyles({
  root: {
    borderRadius: 12,
    width: 382,
    height: 290,
    position: 'relative',
    '& .MuiBox-root': {
      width: '100%',
      backgroundColor: '#F7F7F7',
      height: '44px',
      position: 'absolute',
      bottom: '0', right: '0',
      borderRadius: '0 0 8px 8px'
    },
    '& .MuiTypography-h3': {
      textAlign: 'center',
      fontSize: 24,
      color: '#707070'
    }
  }
})(Paper)

const QuestionButton = withStyles({
  contained: {
    display: 'block',
    margin: 'auto',
    '& .MuiAvatar-root': {
      width: 85,
      height: 85,
      backgroundColor: '#F4F4F4',
      border: '1px solid #C3C3C3',
      margin: '14px 20px 10px'
    },
    '& .MuiTypography-body1': {
      textAlign: 'center',
      color: '#B8B8B8'
    }
  }
})(Button)

export default function ({profile}) {
  const [tabValue, setTabValue] = React.useState(profile.gamification)
  const genders = data.genreTitles
  const SRQuestions = data.selfReportedQuestions
  const dispatch = useDispatch()
  let answersTotals = useSelector(state => state.logged.answersTotals)
  let answersIsLoading = useSelector(state => state.logged.answersIsLoading)
  let prefsIsLoading = useSelector(state => state.logged.prefsIsLoading)
  
  React.useEffect(() => {
    if (_.isEmpty(answersTotals)) {
      dispatch(loggedFetchTotalAnswers(profile.uuid))
    }
  })
  
  function search(nameKey, myArray = answersTotals) {
    for (let i = 0; i < myArray.length; i++) {
      if (myArray[i][nameKey]) {
        return parseInt(myArray[i][nameKey])
      }
    }
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
  
  function handlePrefChange(pref) {
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
    dispatch(push('/question/' + qCode))
  }
  
  function srPaper(item, index) {
    //Paper con elevación para crear los cuadros de las preguntas autoreportadas
    return (
      <QuestionPaper elevation={4} key={index}>
        <Typography variant={'h3'}>
          <span>-</span>{genders[profile.genre][index].titleEn}<span>-</span>
        </Typography>
        {item.modules.map((modItem, modIndex) => {
          let percentage = getCompletedPercentage(item, index, true)
          return (
            <QuestionButton variant={'contained'} onClick={() => handleQuestionClick(modItem.code)} key={modIndex}>
              <Avatar src={genders[profile.genre][index].avatarImg}/>
              <Typography variant={'body1'}>{modItem.name}</Typography>
              <StaticProgress
                variant={'static'}
                value={percentage}
                style={{width: '70px', height: '70px'}}
              />
            </QuestionButton>
          )
        })}
        <Box/>
      </QuestionPaper>
    )
  }
  
  return (
    <>
      <Grid container>
        <Hidden mdDown>
          <Grid item md={3}/>
        </Hidden>
        <Grid item xs={12} md={6} style={{width: 792}}>
          {/*Profile Header*/}
          <Grid container style={{marginTop: '10px', marginBottom: '20px'}}>
            <Grid item xs={12} md={4}>
              <HeaderAvatar src="https://files.tegger.io/assets/tegger/images/reactProfile/00_plebeya.svg"/>
              <Typography><span>-</span>{profile.name}<span>-</span></Typography>
            </Grid>
            <Grid item xs={12} md={8} className="infoText">
              <Grid container>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={12} md={6} style={{marginTop: '10px', marginBottom: '30px'}}>
                      {/*UserName*/}
                      <UserNameTypography>{profile.name}</UserNameTypography>
                      {/*Profile Token Balnce*/}
                      <Grid item style={{marginTop: '0', display: 'flex'}}>
                        <Box className="TokenImg"/>
                        <TokenBalanceTypography variant={'body1'}>
                          {profile.tokenBalance}
                        </TokenBalanceTypography>
                      </Grid>
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
                    {prefsIsLoading ? <CircularProgress style={{color: 'white'}}/> :
                      <>
                        <Grid item xs={12} md={6}>
                          {/*Profile location switch*/}
                          <PanelTypography variant={'h3'}>Localización</PanelTypography>
                          <Switch
                            checked={profile.preferences.location}
                            onChange={() => handlePrefChange('location')}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          {/*Profile tracking switch*/}
                          <PanelTypography variant={'h3'}>Navegación</PanelTypography>
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
          <GamificationAppBar position={'static'}>
            <Box />
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
                        <Avatar src={item.avatarImg}/>
                        <Typography variant={'body2'}>{item.titleEn}</Typography>
                        <StaticProgress
                          variant={'static'}
                          value={percentage}
                          style={{width: '70px', height: '70px'}}/>
                      </>
                    }/>
                  )
                }
                return null
              })
              }
            </Tabs>
          </GamificationAppBar>
        </Grid>
        {/*Preguntas niveles*/}
        <Grid item xs={12}>
          <Grid container>
            <Hidden mdDown>
              <Grid item md={4}/>
            </Hidden>
            <QuestionGrid item xs={12} md={4}>
              {SRQuestions.map((item, index) => {
                if (tabValue === index) {
                  return (
                    srPaper(item, index)
                  )
                }
                return null
              })}
            </QuestionGrid>
            <Hidden mdDown>
              <Grid item md={4}/>
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
