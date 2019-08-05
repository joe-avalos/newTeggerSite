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
import {loggedFetchTotalAnswers, loggedPreferenceChange} from '../modules/actions/loggedActions'
import '../stylesheets/components/tggMainProfile.scss'
//Material UI Component Overrides
const MobileProfileBG = withStyles(theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      margin: -26,
      paddingLeft: 26,
      backgroundColor: theme.palette.primary.main,
      maxWidth: 'initial'
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
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      marginLeft: -26,
      backgroundColor: '#FF8A26',
      minHeight: 90,
      padding:'10px 0 15px',
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
        fontSize:'1',
      },
    },
    '& .MuiTypography-body1': {
      color: 'white',
      fontSize:16,
      fontWeight:600,
    },
    '& .MuiButton-contained':{
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
        transition: 'scale 300ms ease-in-out',
        backgroundColor: theme.palette.secondary.main
      },
      '& .MuiCircularProgress-static[style]': {
        transform: 'scale(1.1) rotate(-90deg) !important',
        transition: 'scale 300ms ease-in-out',
        color: theme.palette.secondary.main,
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
    justifyContent: 'center',
    '&.SRSelected': {
      '& .MuiCircularProgress-static[style]': {
        color: theme.palette.primary.main
      }
    }
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
      overflowX: 'scroll',
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
      height: '99px !important',
      width: '99px !important',
      position: 'absolute',
      top: -13,
      left: 'calc(50% - 50px)',
      color: '#BFBFBF',
    }
  }
})(Button)

const NavigationProgress = withStyles({
  root: {
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
    marginTop:'30px',
    textAlign:'center',
    maxWidth:'600px',
    margin:'auto',
    '& .MuiButton-root': {
      backgroundImage:'url("https://files.tegger.io/assets/tegger/images/reactHome/CCLogo.png")',
      width:76,
      height:76,
      borderRadius:'50%',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize:'60%',
      margin:'20px 10px',
      backgroundColor: 'transparent',
      border: '1px solid black',
      opacity:'.5',

      },
      '& .MuiButton-root:last-of-type': {
        backgroundImage:'url("https://files.tegger.io/assets/tegger/images/reactHome/CCNewsLogo.png")',
      }
    },
  }) (Box)

export default function ({profile}) {
  const [tabValue, setTabValue] = React.useState(1)
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
          <span>-</span>{genders[profile.genre][index].titleEn}<span>-</span>
        </Typography>
        <Box>
          {item.modules.map((modItem, modIndex) => {
            let percentage = getCompletedPercentage(item, index, true)
            return (
              <QuestionButton variant={'contained'} onClick={() => handleQuestionClick(modItem.code)} key={modIndex}>
                <Avatar src={genders[profile.genre][index].avatarImg}/>
                <Typography variant={'body1'}>{modItem.name}</Typography>
                <CircularProgress
                  variant={'static'}
                  value={percentage}
                />
              </QuestionButton>
            )
          })}
        </Box>
        <NavigationProgress>
          <LinearProgress variant={'determinate'} value={45}/>
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
              <Typography><span>-</span>{genders[profile.genre][profile.gamification].titleEn}<span>-</span></Typography>
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
                        {profile.tokenBalance}
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

                          <Typography variant={'h3'}>Localización<Box/></Typography>
                          <Button style={{marginTop:-12}}
                            variant={'contained'}
                            onClick={() => handlePrefChange('location')}
                          >
                            <Navigation style={{color: 'white', transform: 'rotate(45deg)'}}/>
                            <Typography
                              variant={'body1'}>{profile.preferences.location ? 'Activada' : 'Desactivada'}</Typography>
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          {/*Profile tracking switch*/}
                          <Typography variant={'h3'}>Navegación</Typography>
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
                  <Tab key={index} value={index} label={
                    <>
                      <Avatar src={item.avatarImg}/>
                      <Typography variant={'body2'}>{item.titleEn}</Typography>
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
        <Grid item xs={12}>

        <InstructionBox>
          <Typography variant={"body1"}>
          ¡Sube al siguiente nivel completando las encuestas y navegando en sitios afiliados para obtener más y mejores premios!
          </Typography>
            <Button href="https://culturacolectiva.com/" target="_blank"> >
            </Button>
            <Button href="https://news.culturacolectiva.com/" target="_blank">></Button>
        </InstructionBox>

          <Grid container>
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
