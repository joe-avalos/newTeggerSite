import React from 'react'
import withStyles from '@material-ui/styles/withStyles'
import InputBase from '@material-ui/core/InputBase'
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button'
import {TGGInputMailIcon} from '../tggIcons'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'

import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'
import {useDispatch} from 'react-redux'
import {push} from 'connected-react-router'

import {userFetchUserEmail} from '../../modules/actions/userActions'

const validate = value => {
  return !isEmpty(value) && isEmail(value)
}

const TGGInputStyle = withStyles(theme => ({
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

 export default function TggEmailInput() {
   const [email, setName] = React.useState('')
   const [error, setError] = React.useState({error: false, email:'',required:''})
   const dispatch = useDispatch()
   function handleChange(e){
     setName(e.target.value)
   }
   function handleSubmit(e){
     e.preventDefault()
     if (validate(email)){
       setName('')
       setError({...error, error:false})
       dispatch(userFetchUserEmail(email))
       dispatch(push('/getin'))
     }else{
       setError({
         error: true,
         email: isEmail(email) ? '':'Enter a valid email',
         required: isEmpty(email) ? 'Email is required':''
       })
     }
   }
   return (
     <form onSubmit={handleSubmit} noValidate autoComplete="off">
       <FormControl
         error={error.error}
         disabled={false}
         style={{maxWidth:'100%'}}
       >
         <TGGInputStyle
           onChange={handleChange}
           name="email"
           placeholder="Enter your email"
           autoComplete="email"
           startAdornment={
             <InputAdornment position={'start'}>
               <TGGInputMailIcon />
             </InputAdornment>
           }
           endAdornment={
             <InputAdornment position={'end'} onClick={handleSubmit}>
                <MailButton>Go!</MailButton>
             </InputAdornment>
           }
         />
         {error.error && <FormHelperText>{error.required !== '' ? error.required : error.email}</FormHelperText>}
       </FormControl>
     </form>
   )
 }
