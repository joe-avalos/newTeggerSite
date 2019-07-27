import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'

const SelectInput = ({handleChange, value, name, label, answers}) => {
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select
        native
        value={value}
        onChange={handleChange}
        inputProps={{name:name}}
      >
        <option value="" />
        {answers.map((item,key) => {
          return (
            <option key={key} value={item}>{item}</option>
          )
        })}
      </Select>
    </FormControl>
  )
}
export default SelectInput
