import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import queryString from 'query-string'

export default function () {
  console.log(window)
  return (
    <Container maxWidth="lg" className="contentContainer">
      <Box className="background onboardingBG" />
      Welcome to question
    </Container>
  )
}
