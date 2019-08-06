import React from 'react'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import '../stylesheets/pages/wallet.scss'
import withStyles from '@material-ui/styles/withStyles'

import {useDispatch, useSelector} from 'react-redux'
import _ from 'lodash'

import {loggedFetchProfile, loggedFetchWallet} from '../modules/actions/loggedActions'
import SimpleLineChart from '../components/tggSimpleLineChart'
import WalletSummary from '../components/tggWalletSummary'
import TGGDialog from '../components/TGGDialog'

const PaperTotalBalance = withStyles(theme =>({
  root:{
    width:200,
    padding:'5px 40px',
    display:'inline-table',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '15px 40px',
      textAlign: 'center',
      marginBottom: 15,
      
    },
    '& .MuiTypography-h2':{
      fontWeight:'600',
    }
    
  }
}))(Paper)

export default function () {
  const profile = useSelector(state => state.logged.profile)
  const wallet = useSelector(state => state.logged.wallet)
  const langWallet = useSelector(state => state.language.langJson.wallet)
  const [dialog, setDialog] = React.useState({open: false, content: ''})
  const dispatch = useDispatch()
  let datesData = {}
  let chartData = {}

  React.useEffect(() => {
    if (profile.uuid === '') {
      dispatch(loggedFetchProfile())
    }
    if (_.isEmpty(wallet)){
      dispatch(loggedFetchWallet(profile.uuid))
    }
  },[profile,wallet,dispatch])

  function dateReducer(reduced, item) {
    let dateKey = item.createdAt.substr(0, 10)
    if (reduced[dateKey]) {
      reduced[dateKey] += Number(item.value)
    } else {
      reduced[dateKey] = Number(item.value)
    }
    return reduced
  }
  
  function handleNavigationDialog() {
    setDialog({open: true, content: 'navigation'})
  }
  
  function handleClose() {
    setDialog({open: false, content: ''})
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
          <Typography variant={'h3'}>{langWallet.title}</Typography>
          <Typography variant={'h2'}>{langWallet.subTitle}</Typography>
        </Grid>
        <Hidden mdDown>
          <Grid item md={3}/>
        </Hidden>
        <Grid item xs={12} md={7}>
          <Grid container>
            <Grid item xs={12} md={4}>
              <PaperTotalBalance elevation={4}>
                <Typography variant={'body2'}>{langWallet.totalBalance}</Typography>
                <Typography variant={'h2'}>{wallet.tokenBalance}</Typography>
              </PaperTotalBalance>
            </Grid>
            <Hidden mdDown>
              <Grid item md={1}/>
            </Hidden>
            <Grid item xs={12} md={7}>
              <Grid container>
                <Grid item xs={6} style={{borderRight:'1px solid #b8b8b8', padding:'0 20px',textAlign:'center'}}>
                  <Typography variant={'body2'}>{langWallet.income}</Typography>
                  <Typography variant={'h2'}>{wallet.income}</Typography>
                </Grid>
                <Grid item xs={6} style={{padding:'0 20px',textAlign:'center'}}>
                  <Typography variant={'body2'}>{langWallet.output}</Typography>
                  <Typography variant={'h2'}>{wallet.outcome}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <SimpleLineChart chartData={chartData}/>
        </Grid>
        <Hidden mdDown>
          <Grid item md={2} />
        </Hidden>
        <Grid item xs={12} md={8} style={{marginTop:50}}>
          <Typography variant={'h3'}>{langWallet.summary.title}</Typography>
          <Typography variant={'h2'}>{langWallet.summary.subTitle}</Typography>
          <WalletSummary summaryData={wallet.transactions}/>
        </Grid>
        <Grid item xs={12} md={6} style={{marginTop:70, marginBottom:70}}>
          <Typography variant={'h3'}>{langWallet.article.title}</Typography>
          <Typography variant={'h2'}>
            {langWallet.article.subTitle}
          </Typography>
          <Typography variant={'body1'}>
            {langWallet.article.msg}
          </Typography>
          <Box style={{marginTop:50}}>
            <Button onClick={handleNavigationDialog}>{langWallet.morePoints}</Button>
            <Button variant={'contained'} href="/">{langWallet.learnMore}</Button>
          </Box>
        </Grid>
        <Hidden mdDown>
          <Grid item md={6}>
            <Box className="background tokensBG"/>
          </Grid>
        </Hidden>
      </Grid>
      <TGGDialog content={dialog.content} open={dialog.open} handleClose={handleClose} />
    </Container>
  )
}
