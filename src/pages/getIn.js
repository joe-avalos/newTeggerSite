import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import FormHelperText from '@material-ui/core/FormHelperText'
import CircularProgress from  '@material-ui/core/CircularProgress'

import {useDispatch, useSelector} from 'react-redux'
import queryString from 'query-string'

import isEmpty from 'validator/lib/isEmpty'
import isEmail from 'validator/lib/isEmail'
import isAlphanumeric from 'validator/lib/isAlphanumeric'
import matches from 'validator/lib/matches'

import {
  userFetchUserEmail,
  userLoginRequest,
  userNewSignupRequest,
  userReferrerSubmitted
} from '../modules/actions/userActions'
import RegisterForm from '../components/forms/registerForm'
import LoginForm from '../components/forms/loginForm'
import EmailInput from '../components/inputs/EmailInput'

const passRegEx = new RegExp(/^(?=.+[a-z])(?=.+[A-Z])(?=.+\d)[A-Za-z\d]\S{7,50}$/g)

export default function GetIn() {
  const dispatch = useDispatch()
  let userLoading = useSelector(state => state.user.isLoading)
  React.useEffect(() => {
    let queryReferrer = queryString.parse(window.location.search)
    if (queryReferrer) {
      dispatch(userReferrerSubmitted(queryReferrer.ref))
    }
  })
  const userStatus = useSelector(state => {
    if (state.user.email !== '') {
      return 'userFound'
    } else if (state.user.subEmail !== '') {
      return 'userSub'
    } else {
      return 'noSub'
    }
  })
  let userError = useSelector(state => state.user.userError)
  console.log(userLoading)
  /*const validate = value => {
    switch (userStatus) {
      case 'userFound':
        return !isEmpty(value.userid) && !isEmpty(value.password)
      case 'userSub':
        return !isEmpty(value.email) &&
          !isEmpty(value.username) &&
          !isEmpty(value.password) &&
          isEmail(value.email) &&
          isAlphanumeric(value.username) &&
          matches(value.password, passRegEx)
      default:
        return !isEmpty(value.email) && isEmail(value.email)
    }
  }*/
  
  /*function handleSubmit(e) {
    e.preventDefault()
    switch (userStatus) {
      case 'userFound':
        let loginData = {
          userid: e.target.emailOrUsername.value || '',
          password: e.target.password.value || ''
        }
        if (validate(loginData)) {
          dispatch(userLoginRequest(loginData))
        }
        return
      case 'userSub':
        let signUpData = {
          email: e.target.emailOrUsername.value || '',
          username: e.target.username.value || '',
          password: e.target.password.value || '',
        }
        let chckbxs = e.target.cbgs[0].checked && e.target.cbgs[1].checked && e.target.cbgs[2].checked
        if (validate(signUpData) && chckbxs) {
          dispatch(userNewSignupRequest(signUpData))
        }
        return
      default:
        if (validate({email: e.target.email.value})) {
          dispatch(userFetchUserEmail(e.target.email.value))
        }
        return
    }
  }*/
  return (
    <Container maxWidth="lg" className="contentContainer">
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant={'h3'}>
            ¡Entrar!
          </Typography>
          <Typography variant={'h2'}>
            Ingresa tu correo para comenzar.
          </Typography>
          <Typography variant={'body1'}>
            Recibe tus primeros tokens e intercámbialos por productos en nuestro marketplace.
          </Typography>
          <RegisterForm />
        </Grid>
        <Hidden mdDown>
          <Grid item md={6}>
          
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  )
}
