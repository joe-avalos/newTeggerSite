import React from 'react'

import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/styles/withStyles'

const SelectRadioGroup = withStyles({
  root: {
    '& .MuiIconButton-label': {
      display: 'none'
    }
  }
})(RadioGroup)

const SelectRadioLabel = withStyles({
  root: {
    '& .MuiFormControlLabel-label': {
      height: 50,
      backgroundColor: '#F4F4F4',
      borderRadius: 6,
      border: '1px solid #B8B8B8',
      lineHeight: '50px',
      paddingLeft: 10,
      width: '100%',
      margin: '7px 0'
    },
    '& .Mui-checked + .MuiFormControlLabel-label ': {
      backgroundColor: '#FFE8CC',
      border: '2px solid #FF9C26'
    }
  }
})(FormControlLabel)

const SelectInput = ({handleChange, value, name, label, answers}) => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Typography variant={'body2'} style={{marginTop: 30}}>{label}</Typography>
        <FormControl component="fieldset">
          <SelectRadioGroup
            name={name}
            value={value}
            onChange={handleChange}
          >
            {answers.map((item, key) => {
                return (
                  <SelectRadioLabel key={key} value={item} control={<Radio disableRipple/>} label={item}/>
                )
              }
            )}
          </SelectRadioGroup>
        </FormControl>
      </Grid>
      <Hidden mdDown>
        <Grid item md={6}/>
      </Hidden>
    </>
  )
}
export default SelectInput
