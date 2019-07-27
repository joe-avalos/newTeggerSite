import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'

const CheckboxInput = ({handleChange, answers}) => {
  return (
    <FormControl>
      <FormGroup>
        {answers.map((item,key)=>{
          return(
            <FormControlLabel
              key={key}
              control={
                <Checkbox name={item.code} onChange={handleChange} />
              }
              label={
                <Typography variant={'body1'}>{item.name}</Typography>
              }
            />
          )
        })}
      </FormGroup>
    </FormControl>
  )
}
export default CheckboxInput
