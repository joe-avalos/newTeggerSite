import React from 'react'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import {useDispatch, useSelector} from 'react-redux'
import _ from 'lodash'

import {loggedFetchProfile, loggedFetchWallet} from '../modules/actions/loggedActions'
import SimpleLineChart from '../components/tggSimpleLineChart'
import WalletSummary from '../components/tggWalletSummary'

export default function () {
  const profile = useSelector(state => state.logged.profile)
  const wallet = useSelector(state => state.logged.wallet)
  const dispatch = useDispatch()
  let datesData = {}
  let chartData = {}
  
  React.useEffect(() => {
    if (profile.uuid === '') {
      dispatch(loggedFetchProfile())
    }
    if (_.isEmpty(wallet)) {
      dispatch(loggedFetchWallet(profile.uuid))
    }
  })
  
  function dateReducer(reduced, item) {
    let dateKey = item.createdAt.substr(0, 10)
    if (reduced[dateKey]) {
      reduced[dateKey] += Number(item.value)
    } else {
      reduced[dateKey] = Number(item.value)
    }
    return reduced
  }
  
  if (!_.isEmpty(wallet)) {
    datesData = wallet.transactions.sort((a, b) => +a.createdAt < +b.createdAt).reduce(dateReducer, {})
    chartData = Object.keys(datesData).map(key => {
        return {name: key, tokens: datesData[key]}
      }
    )
  }
  
  return (
    <Container maxWidth="lg" className="contentContainer">
      <Box className="background walletBG"/>
      <Grid container>
        <Hidden mdDown>
          <Grid item md={3}/>
        </Hidden>
        <Grid item xs={12} md={7}>
          <Typography variant={'h3'}>Wallet</Typography>
          <Typography variant={'h2'}>Balance</Typography>
        </Grid>
        <Hidden mdDown>
          <Grid item md={3}/>
        </Hidden>
        <Grid item xs={12} md={7}>
          <Grid container>
            <Grid item xs={12} md={3}>
              <Paper elevation={5}>
                <Typography variant={'body2'}>Total Balance</Typography>
                <Typography variant={'h2'}>{wallet.tokenBalance}</Typography>
              </Paper>
            </Grid>
            <Hidden mdDown>
              <Grid item md={1}/>
            </Hidden>
            <Grid item xs={12} md={7}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography variant={'body2'}>Ingresos</Typography>
                  <Typography variant={'h2'}>{wallet.income}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant={'body2'}>Egresos</Typography>
                  <Typography variant={'h2'}>{wallet.outcome}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <SimpleLineChart chartData={chartData}/>
        </Grid>
        <Grid item xs={12}>
          <WalletSummary summaryData={wallet.transactions}/>
        </Grid>
        <Grid item xs={6}>
          <Typography variant={'h3'}>¿Qué son los Tegger Tokens?</Typography>
          <Typography variant={'h2'}>
            Publishers are all sites, portals or network of websites who decide to partner with Tegger.
          </Typography>
          <Typography variant={'body1'}>
            You can use your rewards for exclusive products and experiences. Tegger also distributes the value of the
            information to sites and content creators so they can keep creating the quality content you love.
          </Typography>
          <Button>Obten mas Puntos</Button>
          <Button variant={'contained'}>Conoce más</Button>
        </Grid>
        <Hidden mdDown>
          <Grid item xs={6}>
          
          </Grid>
        </Hidden>
      </Grid>
    </Container>
  )
}
