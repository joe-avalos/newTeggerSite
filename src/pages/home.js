import React from 'react'
import {
  Container,
  Typography,
  Grid
} from "@material-ui/core";

export default function home() {
  return (
    <Container maxWidth="lg" className="contentContainer">
      <div className="homeBackground" />
      <Typography variant={"h3"}>Who We Are</Typography>
      <Typography variant={"body1"}>Donec eu nisl magna. Nam aliquet mi et massa posuere, nec sagittis quam lobortis. Maecenas et mi elementum,
        tincidunt velit non, faucibus ex. Aliquam sodales nisl velit, sit amet dapibus eros fringilla sed. Nam et
        facilisis lacus, id tempus metus. Suspendisse eleifend vulputate lacus sit amet pulvinar. Sed gravida accumsan
        eros, et scelerisque ex finibus sed.</Typography>
    </Container>
  )
}
