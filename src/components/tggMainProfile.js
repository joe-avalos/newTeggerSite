import React from 'react'
//Material UI Imports
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import LinearProgress from '@material-ui/core/LinearProgress'
import Paper from '@material-ui/core/Paper'
import Navigation from '@material-ui/icons/Navigation'
import Switch from '@material-ui/core/Switch'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/styles/withStyles'
//Third party library imports
import {useDispatch, useSelector} from 'react-redux'
import {push} from 'connected-react-router'
import _ from 'lodash'
//Tegger app import
import data from './data/selfReportedData'
import {
  loggedCloseSuccessDialog,
  loggedFetchTotalAnswers,
  loggedPreferenceChange
} from '../modules/actions/loggedActions'
import '../stylesheets/components/tggMainProfile.scss'
import TGGDialog from './TGGDialog'
//Material UI Component Overrides
const MobileProfileBG = withStyles(theme => ({
  root: {
    backgroundImage: 'url("")',
    backgroundPosition: 'right',
    backgroundSize: '49%',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      margin: -26,
      paddingLeft: 26,
      backgroundColor: theme.palette.primary.main,
      maxWidth: 'initial',
      
    }
  }
}))(Grid)

const ProfileGrid = withStyles(theme => ({
  root: {
    marginTop: 10,
    marginBottom: 20,
    '& > .MuiGrid-item': {
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        flexDirection: 'column-reverse'
      },
      '& .MuiAvatar-root': {
        background: '#B8B8B8',
        border: '5px solid white',
        width: 150,
        height: 150,
        borderRadius: '50%',
        boxShadow: '0px 10px 12px #00000026',
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
          marginTop: 12,
        },
        '& + .MuiTypography-root': {
          margin: '0 .5em',
          textTransform: 'uppercase',
          fontFamily: 'Exo',
          fontSize: '1.125em',
          fontWeight: 'bold',
          color: '#FFFFFF',
          textAlign: 'center',
          marginTop: '15px'
        }
      },
    }
  }
}))(Grid)

const UserGrid = withStyles(theme => ({
  root: {
    marginTop: 10,
    marginBottom: 30,
    overflowX: 'visible',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    '& > .MuiTypography-body1': {
      color: 'white',
      fontFamily: 'Encode Sans Semi Expanded',
      fontSize: '1.5rem',
      fontWeight: 400,
      wordWrap: 'initial'
    },
    '& > .MuiTypography-body1:last-of-type': {
      position: 'relative',
      marginLeft: 40,
      fontSize: '2.25rem',
      fontWeight: '600',
      [theme.breakpoints.down('sm')]: {
        marginLeft: 'initial'
      },
    }
  }
}))(Grid)

const PrefGrid = withStyles(theme => ({
  root: {
    marginLeft: '-25px',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      marginLeft: -26,
      backgroundColor: '#FF8A26',
      minHeight: 90,
      padding: '10px 0 15px',
    },
    '& > .MuiGrid-item': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    '& > .MuiGrid-item:first-of-type': {
      borderRight: '1px solid white'
    },
    '& .MuiTypography-h3': {
      color: 'white',
      fontSize: '1.125rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1',
      },
    },
    '& .MuiTypography-body1': {
      color: 'white',
      fontSize: 16,
      fontWeight: 600,
    },
    '& .MuiButton-contained': {
      width: 'initial',
      marginRight: 0,
      paddingRight: 0
    }
    
  }
}))(Grid)

const GamificationAppBar = withStyles(theme => ({
  root: {
    zIndex: 1099,
    borderRadius: '70px',
    height: '140px',
    margin: 'auto',
    width: '755px',
    padding: '20px',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      marginLeft: -26,
      borderRadius: 0,
      overflowX: 'hidden',
      padding: '20px 0',
      '&.MuiPaper-elevation4': {
        boxShadow: 'initial'
      }
    },
    '& .MuiBox-root': {
      width: '80%',
      height: 6,
      position: 'absolute',
      border: '1px solid #dadada',
      top: '42%',
      left: '9%',
      [theme.breakpoints.down('sm')]: {
        width: '101%',
        left: -1
      },
    },
    '& .MuiTabs-indicator': {
      display: 'none'
    },
    '& .MuiTab-root': {
      minWidth: 140,
      opacity: 1,
    },
    '& .MuiAvatar-root': {
      width: 60,
      height: 60,
      backgroundColor: '#B8B8B8',
      border: '1px solid #C3C3C3',
      transition: 'scale 300ms ease-in-out'
    },
    '& .MuiCircularProgress-static[style]': {
      position: 'absolute',
      top: 7,
      color: '#BFBFBF',
      transition: 'scale 300ms ease-in-out',
      width: '70px !important',
      height: '70px !important'
    },
    '& .MuiTypography-body2': {
      marginTop: 4,
      fontSize: '0.875rem',
      textTransform: 'capitalize',
      fontFamily: 'Exo'
    },
    '& .gamificationCompleted': {
      '& .MuiAvatar-root': {
        backgroundColor: theme.palette.secondary.main
      },
      '& .MuiCircularProgress-static[style]': {
        color: theme.palette.secondary.main,
      }
    },
    '& .gamificationInProgress': {
      '& .MuiCircularProgress-static[style]': {
        color: '#B8B8B8',
      }
    },
    '& .Mui-selected': {
      '& .MuiTypography-body2': {
        textTransform: 'uppercase',
        marginTop: 10,
        fontSize: '1.125rem',
        color: '#5F5F5F',
        transform: 'translateY(5px)'
      },
      '& .MuiAvatar-root': {
        transform: 'scale(1.1) translateY(6px)',
        transition: 'scale 300ms ease-in-out'
      },
      '& .MuiCircularProgress-static[style]': {
        transform: 'scale(1.1) rotate(-90deg) !important',
        transition: 'scale 300ms ease-in-out'
      }
    }
  }
}))(AppBar)

const QuestionGrid = withStyles(theme => ({
  root: {
    marginBottom: '1.5em',
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
}))(Grid)

const QuestionPaper = withStyles({
  root: {
    borderRadius: 12,
    width: 382,
    maxWidth: '100%',
    height: 290,
    position: 'relative',
    '& .MuiBox-root:first-of-type': {
      display: 'flex',
      maxWidth: '100%'
    },
    '& .MuiBox-root:last-of-type': {
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
    height: 'initial',
    minWidth: 140,
    '&.completed': {
      '& .MuiAvatar-root': {
        backgroundColor: '#FF6200'
      },
      '& .MuiCircularProgress-static[style]': {
        color: '#E6500B',
      }
    },
    '&.inProgress': {
      '& .MuiCircularProgress-static[style]': {
        color: '#FFD7BE',
      }
    },
    '& .MuiAvatar-root': {
      width: 85,
      height: 85,
      backgroundColor: '#B8B8B8',
      border: '1px solid #C3C3C3',
      margin: '14px auto 10px'
    },
    '& .MuiTypography-body1': {
      textAlign: 'center',
      color: '#B8B8B8'
    },
    '& .MuiCircularProgress-static[style]': {
      height: '97px !important',
      width: '97px !important',
      position: 'absolute',
      top: -13,
      left: 'calc(50% - 48px)',
      color: '#BFBFBF',
    },
  }
})(Button)

const NavigationProgress = withStyles({
  root: {
    cursor: 'pointer',
    '& .MuiLinearProgress-root': {
      width: '70%',
      margin: 'auto',
      top: 22,
    },
    '& .MuiTypography-h3': {
      fontSize: '10px',
    }
  }
})(Box)

const InstructionBox = withStyles({
  root: {
    marginTop: 30,
    textAlign: 'center',
    maxWidth: 600,
    margin: 'auto',
    '& .MuiButton-root': {
      width: 76,
      height: 76,
      borderRadius: '50%',
      margin: '20px 10px',
      backgroundColor: 'transparent',
      border: '1px solid black',
      opacity: '.5',
    }
  }
})(Box)

export default function ({profile}) {
  const [tabValue, setTabValue] = React.useState(1)
  const [dialog, setDialog] = React.useState({open: false, content: ''})
  const genders = data.genderTitles
  const SRQuestions = data.selfReportedQuestions
  
  const dispatch = useDispatch()
  let answersTotals = useSelector(state => state.logged.answersTotals)
  let answersIsLoading = useSelector(state => state.logged.answersIsLoading)
  let answerPostSuccess = useSelector(state => state.logged.postAnswersSuccess)
  let prefsIsLoading = useSelector(state => state.logged.prefsIsLoading)
  let currentLang = useSelector(state => state.language.lang)
  let langProfile = useSelector(state => state.language.langJson.profile)
  
  React.useEffect(() => {
    if (_.isEmpty(answersTotals)) {
      dispatch(loggedFetchTotalAnswers(profile.uuid))
    }
  })
  
  function handleNavigationDialog() {
    setDialog({open: true, content: 'navigation'})
  }
  
  function handleClose() {
    setDialog({open: false, content: ''})
    dispatch(loggedCloseSuccessDialog())
  }
  
  function search(nameKey, myArray = answersTotals) {
    if (!myArray) {
      return null
    }
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
          <span>-</span>{
          currentLang === 'ES'
            ? genders[profile.genre][index].titleEs
            : genders[profile.genre][index].titleEn
        }<span>-</span>
        </Typography>
        <Box>
          {item.modules.map((modItem, modIndex) => {
            let percentage = getCompletedPercentage(item, index, true)
            return (
              <QuestionButton
                variant={'contained'}
                onClick={() => handleQuestionClick(modItem.code)}
                key={modIndex}
                className={
                  percentage >= 100
                    ? 'completed'
                    : percentage <= 0
                    ? ''
                    : 'inProgress'
                }
              >
                <Avatar src={modItem.avatarImg}/>
                <Typography variant={'body1'}>{modItem.name}</Typography>
                <CircularProgress
                  variant={'static'}
                  value={percentage}
                />
              </QuestionButton>
            )
          })}
        </Box>
        <NavigationProgress onClick={handleNavigationDialog}>
          <LinearProgress
            variant={'determinate'}
            value={
              profile.gamification > item.level
                ? 100
                : profile.gamification < item.level
                ? 0
                : profile.interacts
            }
          />
        </NavigationProgress>
      </QuestionPaper>
    )
  }
  
  return (
    <>
      <Grid container>
        <Hidden mdDown>
          <Grid item md={3}/>
        </Hidden>
        <MobileProfileBG item xs={12} md={6}>
          {/*Profile Header*/}
          <ProfileGrid container>
            <Grid item xs={12} md={4}>
              <Avatar src={genders[profile.genre][profile.gamification].avatarImg}/>
              <Typography>
                <span>-</span>
                {
                  currentLang === 'ES'
                    ? genders[profile.genre][profile.gamification].titleEs
                    : genders[profile.genre][profile.gamification].titleEn
                }
                <span>-</span></Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container>
                <Grid item xs={12}>
                  <Grid container>
                    <UserGrid item xs={12} md={6}>
                      {/*UserName*/}
                      <Typography variant={'body1'}>{profile.name}</Typography>
                      {/*Profile Token Balnce*/}
                      <Typography variant={'body1'}>
                        <Box className="TokenImg" component="span"/>
                        {Math.round(profile.tokenBalance * 100) / 100}
                      </Typography>
                    </UserGrid>
                    <Grid item xs={12} md={6}>
                      {/* TODO Profile referrals earnings
                      <Typography variant={'body1'}>
                        {profile.genre}
                      </Typography>*/}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <PrefGrid container>
                    {prefsIsLoading ? <CircularProgress style={{color: 'white'}}/> :
                      <>
                        <Grid item xs={6}>
                          {/*Profile location switch*/}
                          <Typography variant={'h3'}>{langProfile.location.title}</Typography>
                          <Button style={{marginTop: -12}}
                                  variant={'contained'}
                                  onClick={() => handlePrefChange('location')}
                          >
                            <Navigation style={{color: 'white', transform: 'rotate(45deg)'}}/>
                            <Typography
                              variant={'body1'}>
                              {profile.preferences.location
                                ? langProfile.location.active
                                : langProfile.location.inactive
                              }
                            </Typography>
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          {/*Profile tracking switch*/}
                          <Typography variant={'h3'}>{langProfile.tracking}</Typography>
                          <Switch
                            checked={profile.preferences.tracking}
                            onChange={() => handlePrefChange('tracking')}
                          />
                        </Grid>
                      </>
                    }
                  </PrefGrid>
                </Grid>
              </Grid>
            </Grid>
          </ProfileGrid>
        </MobileProfileBG>
        <Grid item xs={12}>
          {/*Profile gamification bar */}
          <GamificationAppBar position={'static'}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant={'scrollable'}
              scrollButtons={'auto'}
            >
              {genders[profile.genre].map((item, index) => {
                let percentage = getCompletedPercentage(item, index)
                if (index === 0) {
                  return null
                }
                return (
                  <Tab
                    key={index}
                    value={index}
                    className={
                      percentage >= 100
                        ? 'gamificationCompleted'
                        : percentage <= 0
                        ? ''
                        : 'gamificationInProgress'
                    }
                    label={
                      <>
                        <Avatar src={item.avatarImg}/>
                        <Typography variant={'body2'}>
                          {
                            currentLang === 'ES'
                              ? item.titleEs
                              : item.titleEn
                          }
                        </Typography>
                        <CircularProgress
                          variant={'static'}
                          value={percentage}
                        />
                      </>
                    }/>
                )
              })
              }
            </Tabs>
          </GamificationAppBar>
        </Grid>
        {/*Preguntas niveles*/}
        {answersIsLoading ?
          <CircularProgress/>
          :
          <>
            <Grid item xs={12}>
              <InstructionBox>
                <Typography variant={"body1"}>
                  {langProfile.CTA}
                </Typography>
                <Button href="https://culturacolectiva.com" target="_blank">
                  <Avatar src="https://files.tegger.io/assets/tegger/images/reactHome/CCLogo.png"/>
                </Button>
                <Button href="https://news.culturacolectiva.com" target="_blank">
                  <Avatar src="https://files.tegger.io/assets/tegger/images/reactHome/CCNewsLogo.png"/>
                </Button>
              </InstructionBox>
            </Grid>
            <Hidden mdDown>
              <Grid item md={4}/>
            </Hidden>
            <QuestionGrid item xs={12} md={4} className="SRSelected">
              {SRQuestions.map((item, index) => {
                if (index === 0) {
                  return null
                }
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
                if (index === 0) {
                  return null
                }
                if (tabValue !== index) {
                  return (
                    <QuestionGrid item md={6} key={index}>
                      {srPaper(item, index)}
                    </QuestionGrid>
                  )
                }
                return null
              })}
            </Hidden>
          </>
        }
      </Grid>
      <TGGDialog
        open={dialog.open || answerPostSuccess.open}
        content={dialog.content !== '' ? dialog.open : answerPostSuccess.content}
        handleClose={handleClose}/>
    </>
  )
}
