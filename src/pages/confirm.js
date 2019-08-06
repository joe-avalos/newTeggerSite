import React from 'react'
import queryString from 'query-string'
import {useDispatch, useSelector} from 'react-redux'
import {userConfirmRequest} from '../modules/actions/userActions'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import Hidden from '@material-ui/core/Hidden'
import Container from '@material-ui/core/Container'

export default function () {
  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.user.confirmIsLoading)
  const langConfirm = useSelector(state => state.language.langJson.confirm)
  React.useEffect(() => {
    const qsParsed = queryString.parse(window.location.search)
    if (qsParsed.code && qsParsed.username) {
      dispatch(userConfirmRequest(qsParsed))
    }
  })
  return (
    <Container maxWidth="lg" className="contentContainer">
      <Grid container>
        <Grid item xs={12} md={6}>
          {isLoading ?
            (
              <CircularProgress/>
            ) :
            (<>
              <Typography variant={'h3'}>
                {langConfirm.title}
              </Typography>
              <Typography variant={'body1'}>
                {langConfirm.subTitle}
              </Typography>
            </>)
          }
        </Grid>
        <Hidden mdDown>
          <Grid item md={6}>
          
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  )
}
