import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

export default function () {
  return (
    <Container maxWidth="lg" className="contentContainer">
      <Box className="background onboardingBG" />
      Welcome to question
    </Container>
  )
}
