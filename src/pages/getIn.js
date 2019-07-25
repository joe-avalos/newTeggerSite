import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import FormHelperText from '@material-ui/core/FormHelperText'
import CircularProgress from  '@material-ui/core/CircularProgress'

import {useDispatch, useSelector} from 'react-redux'
import queryString from 'query-string'

import {userReferrerSubmitted} from '../modules/actions/userActions'
import RegisterForm from '../components/forms/registerForm'
import LoginForm from '../components/forms/loginForm'
import EmailForm from '../components/forms/emailForm'

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
  
  const userStatus = useSelector(state => {
    if (state.user.email !== '') {
      return 'userFound'
    } else if (state.user.subEmail !== '') {
      return 'userSub'
    } else {
      return 'noSub'
    }
  })
  console.log(userLoading)
  
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
          {userLoading ? <CircularProgress /> :
            userStatus === 'noSub' ? <EmailForm/> :
              userStatus === 'userFound' ? <LoginForm /> :
                <RegisterForm/>
          }
          {userError !== '' && <FormHelperText>{userError}</FormHelperText>}
        </Grid>
        <Hidden mdDown>
          <Grid item md={6}>
          
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  )
}
