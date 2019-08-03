import React from 'react'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'

import isMobile from 'validator/lib/isMobilePhone'
import {useDispatch, useSelector} from 'react-redux'
import _ from 'lodash'

import '../stylesheets/pages/srquestion.scss'
import data from '../components/data/selfReportedData'
import useForm from '../components/forms/useForm'
import TextInputField from '../components/inputs/TextInputField'
import DateInput from '../components/inputs/DateInput'
import CheckboxInput from '../components/inputs/CheckboxInput'
import withStyles from '@material-ui/styles/withStyles'
import SelectInput from '../components/inputs/SelectInput'
import {loggedFetchModuleAnswers, loggedFetchProfile, loggedPostModuleAnswers} from '../modules/actions/loggedActions'

const BoxQuestionHeader = withStyles({
  root: {
    height: '240px',
  }
})(Box)

const QuestionsGrid = withStyles({
  root: {
    '& .MuiTypography-body2':{
      fontSize:'1.875rem',
      marginBottom:20,
      color:'#5F5F5F',
    },
    '& .MuiFormControl-root':{
      display: 'block'
    },
    '& .MuiFormHelperText-root':{
      display: 'absolute',
      bottom: 10
    }
  }
})(Grid)

export default function ({match}) {
  const moduleCode = match.params.moduleCode
  const SRQuestions = data.selfReportedQuestions
  const mod = search()
  const dispatch = useDispatch()
  const userUUID = useSelector(state => state.logged.profile.uuid)
  const moduleAnswers = useSelector(state => state.logged.moduleAnswers)
  let basic = false
  let select = {}
  const [firstLoad, setFirstLoad] = React.useState(true)
  
  React.useEffect(() => {
    if (_.isEmpty(moduleAnswers) || firstLoad) {
      if (userUUID === '') {
        dispatch(loggedFetchProfile())
      }
      dispatch(loggedFetchModuleAnswers(userUUID, moduleCode))
      setFirstLoad(false)
    }
  }, [moduleAnswers, dispatch, firstLoad, userUUID, moduleCode])
  
  function search(myObject = SRQuestions, code = moduleCode) {
    if (myObject['code'] === code) {
      return myObject
    } else {
      for (let key of Object.keys(myObject)) {
        if (typeof myObject[key] === 'object') {
          let found = search(myObject[key], code)
          if (found) {
            return found
          }
        }
      }
    }
  }
  
  if (moduleCode === 'ad9e768d875ac3d933d68cfe2cb557a3') {
    basic = true
  }
  
  if (moduleCode === 'cb3fc762153763392eee3940dc261bb8') {
    for (let code of Object.values(mod.questions[0].answers)) {
      select[code.code] = false
    }
  }
  
  const QuestionForm = () => {
    const {values, errors, handleSubmit, handleChange} = useForm(callback, validate, select)
    
    function callback() {
      dispatch(loggedPostModuleAnswers(values, userUUID, mod.code))
    }
    
    function validate() {
      let error = {}
      if (values['16ad17ae2cb71ac03040f06aeec347e1'] && !isMobile(values['16ad17ae2cb71ac03040f06aeec347e1'])) {
        error['16ad17ae2cb71ac03040f06aeec347e1'] = 'Ingresa un número de celular válido'
      }
      return error
    }
    
    
    return (
      <form onSubmit={handleSubmit} noValidate autoComplete="off" style={{marginTop: 50, padding: '0 145px'}}>
        {/*Depende del tipo de preguntas en el módulo regresa uno de los diferentes tipos de input
         **Los diferentes inputs están en sus archivos respectivos
         */}
        <Grid container>
          <Hidden mdDown>
            <Grid item md={1}/>
          </Hidden>
          <Grid item xs={12} md={10}>
            <QuestionsGrid container>
              {mod.questions.map((item, key) => {
                switch (item.fieldType) {
                  case 'input':
                    if (basic && (item.order === 2 || item.order === 3)) {
                      return null
                    }
                    return <Grid item xs={12} key={key}>
                      <TextInputField
                        value={values[item.code]}
                        label={item.en}
                        name={item.code}
                        handleChange={handleChange}
                        error={errors[item.code]}
                      />
                    </Grid>
                  case 'date':
                    return <Grid item xs={12} key={key}>
                      <DateInput
                        birthday={true}
                        value={values[item.code]}
                        label={item.en}
                        name={item.code}
                        handleChange={handleChange}
                        error={errors[item.code]}
                      />
                    </Grid>
                  case 'checkbox':
                    return <CheckboxInput
                        key={key}
                        handleChange={handleChange}
                        answers={item.answers}
                      />
                  case 'select':
                    return <Grid item xs={12} key={key}>
                      <SelectInput
                        handleChange={handleChange}
                        value={values[item.code]}
                        label={item.en}
                        name={item.code}
                        answers={item.answers}
                      />
                    </Grid>
                  default:
                    return null
                }
              })}
              <Hidden mdDown>
                <Grid item md={3} />
              </Hidden>
              <Grid item xs={12} md={6}>
                <Button type="submit" fullWidth>
                  Listo
                </Button>
              </Grid>
            </QuestionsGrid>
          </Grid>
        </Grid>
      </form>
    )
  }
  
  return (
    <Container maxWidth="lg" className="contentContainer">
      <Box className="background questionBG"/>
      <BoxQuestionHeader>
        <Typography variant={'h3'}>
          {mod.name}
        </Typography>
        <Typography variant={'h2'}>
          Básicos
        </Typography>
        <Typography variant={'body1'}>
          Elige las opciones con las que más te identificas.
        </Typography>
      </BoxQuestionHeader>
      <QuestionForm/>
    </Container>
  )
}
