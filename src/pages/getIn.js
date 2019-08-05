import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import FormHelperText from '@material-ui/core/FormHelperText'
import CircularProgress from '@material-ui/core/CircularProgress'

import {useDispatch, useSelector} from 'react-redux'
import queryString from 'query-string'

import {userReferrerSubmitted} from '../modules/actions/userActions'
import RegisterForm from '../components/forms/registerForm'
import LoginForm from '../components/forms/loginForm'
import EmailForm from '../components/forms/emailForm'
import '../stylesheets/pages/getin.scss'

export default function GetIn() {
  const dispatch = useDispatch()
  let userLoading = useSelector(state => state.user.isLoading)
  React.useEffect(() => {
    let queryReferrer = queryString.parse(window.location.search)
    if (queryReferrer) {
      dispatch(userReferrerSubmitted(queryReferrer.ref))
    }
  })
  
  let userError = useSelector(state => state.user.userError)
  let langGetIn = useSelector(state => state.language.langJson.getIn)
  
  const userStatus = useSelector(state => {
    if (state.user.email !== '') {
      return 'userFound'
    } else if (state.user.subEmail !== '') {
      return 'userSub'
    } else {
      return 'noSub'
    }
  })
  return (
    <Container maxWidth="lg" className="contentContainer">
      <Grid container>
        <Grid item xs={12} md={6} className="getInFormGrid textForms">
        <Box className="textForms">
          <Typography variant={'h3'}>
            {langGetIn.title}
          </Typography>
          <Typography variant={'h2'}>
            {langGetIn.subTitle}
          </Typography>
          <Typography variant={'body1'}>
            {langGetIn.msg}
          </Typography>
        </Box>
        <Box className="textForms">
          {userLoading ? <CircularProgress /> :
            userStatus === 'noSub' ? <EmailForm/> :
              userStatus === 'userFound' ? <LoginForm /> :
                <RegisterForm/>
          }
          {userError !== '' && <FormHelperText>{userError}</FormHelperText>}
        </Box>
        </Grid>
        <Hidden mdDown>
          <Grid item md={6}>
            <Box className="imgForms teggerMail" />
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  )
}
