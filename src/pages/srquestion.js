import React from 'react'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import FormHelperText from '@material-ui/core/FormHelperText'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'

import isMobile from 'validator/lib/isMobilePhone'
import isInt from 'validator/lib/isInt'
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
    '& .MuiTypography-body2': {
      fontSize: '1.875rem',
      marginBottom: 20,
      color: '#5F5F5F',
    },
    '& .MuiFormControl-root': {
      display: 'block'
    },
    '& .MuiFormHelperText-root': {
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
  const userGender = useSelector(state => state.logged.profile.genre)
  let moduleAnswers = useSelector(state => state.logged.moduleAnswers)
  let currentLang = useSelector(state => state.language.lang)
  let langForm = useSelector(state => state.language.langJson.forms)
  let langError = useSelector(state => state.language.langJson.errors)
  let basic = false
  const [firstLoad, setFirstLoad] = React.useState(true)
  React.useEffect(() => {
    if (userUUID === '') {
      dispatch(loggedFetchProfile())
    }
    if (_.isEmpty(moduleAnswers) || firstLoad) {
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
      moduleAnswers[code.code] = !!moduleAnswers[code.code]
    }
  }
  
  const QuestionForm = () => {
    const {values, errors, handleSubmit, handleChange} = useForm(callback, validate, moduleAnswers)
    function callback() {
      dispatch(loggedPostModuleAnswers(values, userUUID, mod.code))
    }
    
    function validate() {
      let error = {}
      if (values['16ad17ae2cb71ac03040f06aeec347e1'] && !isMobile(values['16ad17ae2cb71ac03040f06aeec347e1'])) {
        error['16ad17ae2cb71ac03040f06aeec347e1'] = langError.WrongMobileFormat
      }
      if (values['689e536d1eaa33690072412a07324caa'] && !isInt(values['689e536d1eaa33690072412a07324caa'],{min:0,max:99})) {
        error['689e536d1eaa33690072412a07324caa'] = langError.PositiveInteger
      }
      if (values['beccfbf04ace26ff365efb49572b06d8'] && !isInt(values['beccfbf04ace26ff365efb49572b06d8'],{min:0,max:99})) {
        error['beccfbf04ace26ff365efb49572b06d8'] = langError.PositiveInteger
      }
      if (mod.level === 2 && Object.keys(_.pickBy(values)).length < 1) {
        error.formError = langError.atLeastOne
      }
      return error
    }
    
    return (
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
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
                        label={currentLang === 'ES' ? item.es : item.en}
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
                        label={currentLang === 'ES' ? item.es : item.en}
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
                      values={values}
                    />
                  case 'select':
                    return <SelectInput
                      key={key}
                      handleChange={handleChange}
                      value={values[item.code]}
                      label={currentLang === 'ES' ? item.es : item.en}
                      name={item.code}
                      answers={item.answers}
                    />
                  default:
                    return null
                }
              })}
              <Hidden mdDown>
                <Grid item md={3}/>
              </Hidden>
              <Grid item xs={12} md={6} style={{margin: '20px 0'}}>
                {errors.formError && <FormHelperText error={true}>{errors.formError}</FormHelperText>}
                <Button type="submit" fullWidth>
                  {langForm.ready}
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
          {
            currentLang === 'ES'
            ? data.genderTitles[userGender][mod.level].titleEs
            : data.genderTitles[userGender][mod.level].titleEn
          }
        </Typography>
        <Typography variant={'body1'}>
          {mod.level === 2 ? langForm.interests : langForm.littleMore}
        </Typography>
      </BoxQuestionHeader>
      <QuestionForm />
    </Container>
  )
}
