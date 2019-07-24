import React from 'react'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Avatar from '@material-ui/core/Avatar'
import Link from '@material-ui/core/Link'
import FormHelperText from '@material-ui/core/FormHelperText'
import UsernameInput from './inputs/UsernameInput'
import {useDispatch, useSelector} from 'react-redux'
import clsx from 'clsx'

import isEmpty from 'validator/lib/isEmpty'
import isLength from 'validator/lib/isLength'

export default function () {
  const [genre, setGenre] = React.useState(useSelector(state => state.logged.profile.genre))
  const [error, setError] = React.useState('')
  const [answers, setAnswers] = React.useState(
    {
        'f6039d44b29456b20f8f373155ae4973':'',
        '1f7b89b253833a6dd8cd456fb019eb47':''
    })
  const dispatch = useDispatch()
  const validate = value => {
    setAnswers({'f6039d44b29456b20f8f373155ae4973':value,'1f7b89b253833a6dd8cd456fb019eb47':genre})
    return !isEmpty(value) && isLength(value, {min: 4})
  }
  function handleSubmit(e) {
    e.preventDefault()
    console.log(answers)
    if (validate(e.target.username.value || '') && genre !== '') {
      setError('')
      console.log({'answers':answers})
      //dispatch(loggedSendAnswers(answers))
    }else{
      setError('Both fields are required.')
    }
  }
  return (
    <>
      <Grid container>
        <Hidden mdDown>
          <Grid item xs={12} md={1}/>
        </Hidden>
        <Grid item xs={12} md={5}>
          <Typography variant={'h1'}>
            ¡Bienvenido al mundo Tegger!
          </Typography>
          <Typography variant={'body1'}>
            Tegger usa un login que te permite elegir qué tipos de datos deseas compartir e ingresar información
            adicional. Recibes tokens por tus interacciones con contenido y por compartir información autoinformada que
            puede cambiarse por recompensas.
          </Typography>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <UsernameInput label="Nombre completo" />
            <Link onClick={() => setGenre('5be369dbfc8f6b4f67abb71d')} className={clsx('avatar', genre === '5be369dbfc8f6b4f67abb71d' ? 'selectedAvatar' : '')}>
              <Avatar src="https://files.tegger.io/assets/tegger/images/reactProfile/dame.svg" />
            </Link>
            <Link onClick={() => setGenre('5be369d3fc8f6b4f67abb71c')} className={clsx('avatar', genre === '5be369d3fc8f6b4f67abb71c' ? 'selectedAvatar' : '')}>
              <Avatar src="https://files.tegger.io/assets/tegger/images/reactProfile/knight.svg" />
            </Link>
            {error !== '' && <FormHelperText>{error}</FormHelperText>}
            <Button type="submit">Ir</Button>
          </form>
        </Grid>
      </Grid>
    </>
  )
}
