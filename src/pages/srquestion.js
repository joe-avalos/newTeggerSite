import React from 'react'
import isMobile from 'validator/lib/isMobilePhone'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import data from '../components/data/selfReportedData'
import useForm from '../components/forms/useForm'
import TextInputField from '../components/inputs/TextInputField'
import DateInput from '../components/inputs/DateInput'
import CheckboxInput from '../components/inputs/CheckboxInput'
import SelectInput from '../components/inputs/SelectInput'
import {useDispatch, useSelector} from 'react-redux'
import {loggedPostAnswers} from '../modules/actions/loggedActions'

export default function ({match}) {
  const questionCode = match.params.questionCode
  const SRQuestions = data.selfReportedQuestions
  let basic = false
  let select = {}
  const mod = search()
  console.log(mod)
  const dispatch = useDispatch()
  const userUUID = useSelector(state => state.logged.profile.uuid)
  console.log(userUUID)
  
  function search(myObject = SRQuestions, code = questionCode){
    if (myObject['code'] === code) {
      return myObject
    }else{
      for (let key of Object.keys(myObject)) {
        if (typeof myObject[key] === 'object'){
          let found = search(myObject[key],code)
          if (found) {return found}
        }
      }
    }
  }
  
  if (questionCode === 'ad9e768d875ac3d933d68cfe2cb557a3'){
    basic = true
  }
  
  if (questionCode === 'cb3fc762153763392eee3940dc261bb8'){
    for (let code of Object.values(mod.questions[0].answers)){
      select[code.code] = false
    }
  }
  
  const QuestionForm = () => {
    const {values, errors, handleSubmit, handleChange} = useForm(callback, validate, select)
    function callback() {
      dispatch(loggedPostAnswers(values,userUUID,mod.code))
    }
    function validate() {
      let error = {}
      console.log(values['16ad17ae2cb71ac03040f06aeec347e1'])
      if (!isMobile(values['16ad17ae2cb71ac03040f06aeec347e1'])){
        error['16ad17ae2cb71ac03040f06aeec347e1'] = 'Ingresa un número de celular válido'
      }
      return error
    }
    return (
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        {/*Depende del tipo de preguntas en el módulo regresa uno de los diferentes tipos de input
         **Los diferentes inputs están en sus archivos respectivos
         */}
        {mod.questions.map((item, key) => {
          switch (item.fieldType) {
            case 'input':
              if (basic && (item.order === 2 || item.order === 3)) {
                return null
              }
              return <TextInputField
                key={key}
                value={values[item.code]}
                label={item.en}
                name={item.code}
                handleChange={handleChange}
                error={errors[item.code]}
              />
            case 'date':
              return <DateInput
                key={key}
                birthday={true}
                value={values[item.code]}
                label={item.en}
                name={item.code}
                handleChange={handleChange}
                error={errors[item.code]}
              />
            case 'checkbox':
              return <CheckboxInput
                key={key}
                handleChange={handleChange}
                answers={item.answers}
              />
            case 'select':
              return <SelectInput
                key={key}
                handleChange={handleChange}
                value={values[item.code]}
                label={item.en}
                name={item.code}
                answers={item.answers}
              />
            default:
              return null
          }
        })}
        <Button type="submit">
          Listo
        </Button>
      </form>
    )
  }
  
  return (
    <Container maxWidth="lg" className="contentContainer">
      <Box className="background onboardingBG" />
      <Typography variant={'h3'}>
        {mod.name}
      </Typography>
      <QuestionForm />
    </Container>
  )
}
