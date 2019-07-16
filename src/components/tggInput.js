import React from 'react'
import withStyles from '@material-ui/styles/withStyles'
import InputBase from '@material-ui/core/InputBase'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import {TGGInputMailIcon} from './Icons'
import FormControl from '@material-ui/core/FormControl/index'

const TGGInput = withStyles(theme => ({
  root:{
    backgroundColor: '#FFFFFF',
    padding: '10px 4px 10px 30px',
    borderRadius: 6,
    [theme.breakpoints.down('sm')]: {
      padding: '10px 4px 10px 10px',
    },
  },
  input:{
    position: 'relative',
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    width: 218,
    padding: '10px 12px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  }
}))(InputBase)
const MailButton = withStyles(theme =>({
  text:{
    padding: '0 62px',
    [theme.breakpoints.down('sm')]: {
      padding: '0 45px',
    },
  }
}))(Button)
 export default function tggInput() {
   return (
     <FormControl
       error={false}
       disabled={false}
       style={{maxWidth:'100%'}}
     >
       <TGGInput
         name="email"
         placeholder="Enter your email"
         startAdornment={
           <InputAdornment position={'start'}>
             <TGGInputMailIcon />
           </InputAdornment>
         }
         endAdornment={
           <InputAdornment position={'end'}>
              <MailButton>Go!</MailButton>
           </InputAdornment>
         }
       />
     </FormControl>
   )
 }
