import React from 'react'

import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Typography from '@material-ui/core/Typography'

const CheckboxInput = ({handleChange, answers}) => {
  return (
    <FormControl>
      <FormGroup>
        <Grid container>
          {answers.map((item, key) => {
            return (
              <Grid item xs={12} md={4} key={key}>
                <FormControlLabel
                  control={
                    <Checkbox name={item.code} onChange={handleChange}/>
                  }
                  label={
                    <Typography variant={'body1'}>{item.name}</Typography>
                  }
                />
              </Grid>
            )
          })}
        </Grid>
      </FormGroup>
    </FormControl>
  )
}
export default CheckboxInput
