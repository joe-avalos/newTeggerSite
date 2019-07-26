import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

import data from '../components/data/selfReportedData'
import useForm from '../components/forms/useForm'
import TextInputField from '../components/inputs/TextInputField'

export default function ({match}) {
  const questionCode = match.params.questionCode
  const SRQuestions = data.selfReportedQuestions
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
  const module = search()
  console.log(module)
  
  const Form = () => {
    const {values, errors, handleSubmit, handleChange} = useForm(callback, validate)
    function callback() {
    
    }
    function validate() {
    
    }
    return (
      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        {module.questions.map((item, key) => {
          switch (item.fieldType) {
            case 'input':
              return <TextInputField
                key={key}
                value={values[item.code]}
                label={item.en}
                name={item.code}
                handleChange={handleChange}
                error={errors[item.code]}
              />
            case 'date':
              return
            case 'checkbox':
              return
            case 'select':
              return
            default:
              return null
          }
        })}
      </form>
    )
  }
  
  return (
    <Container maxWidth="lg" className="contentContainer">
      <Box className="background onboardingBG" />
      <Typography variant={'h3'}>
        {module.name}
      </Typography>
      <Form />
    </Container>
  )
}
