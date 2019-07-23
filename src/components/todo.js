import React, {Component} from "react";
import {connect, useDispatch} from "react-redux";
import {itemsCreateItem, itemsDeleteItem, itemsFetchData} from "../modules/actions/items";
import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'

import {
  List,
  ListItem,
  IconButton,
  Container,
  TextField,
  Button,
  FormControl,
  InputAdornment,
  Typography,
  FormHelperText
} from "@material-ui/core";
import {ArrowForward} from "@material-ui/icons"
import DeleteIcon from "@material-ui/icons/Delete";

const validate = value => {
  return !isEmpty(value) && isEmail(value)
}

function ComposedEmailField() {
  const [name, setName] = React.useState('')
  const [error, setError] = React.useState({error: false, email:'',required:''})
  const dispatch = useDispatch()
  function handleChange(e){
    setName(e.target.value)
  }
  function handleSubmit(e){
    e.preventDefault()
    if (validate(name)){
      dispatch(itemsCreateItem(name))
      setName('')
      setError({error:false})
    }else{
      setError({
        error: true,
        email: isEmail(name) ? '':'Enter a valid email',
        required: isEmpty(name) ? 'Email is required':''
      })
    }
  }
  return (
    <FormControl error={error.error}>
      <TextField
        variant="outlined"
        label="Email or Username"
        value={name}
        onChange={handleChange}
        error={error.error}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                edge="end"
                aria-label="Submit"
                onClick={handleSubmit}
                color="primary"
              >
                <ArrowForward />
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      {error.error && <FormHelperText>{error.required !== '' ? error.required : error.email}</FormHelperText>}
    </FormControl>
  )
}

class ToDo extends Component {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }
  
  componentDidMount() {
    this.props.fetchData('http://5d0809c9fa0025001457866d.mockapi.io/items')//process.env.REACT_APP_API_ROOT+'items')
  }
  
  handleDelete(id){
    this.props.deleteItem(id)
  }
  
  render() {
    const {hasErrored, isLoading, items} = this.props
    let content
    if (hasErrored) {
      content = <p>Sorry! There was an error loading the items</p>
    }else if (isLoading) {
      content = <Typography variant={"body1"}>Loading…</Typography>
    }else {
      content = <List>
        {items.map(item => (
          <ListItem key={item.id}>
            {item.label}
            <IconButton
              onClick={() => this.handleDelete(item.id)}
              aria-label="Delete"
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
    }
    
    return (
      <Container maxWidth="lg" className="contentContainer">
        <form noValidate autoComplete="off">
          {/*<FormControl>
          <TextField
            variant="outlined"
            label="New Task"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="Submit"
                    onClick={this.handleSubmit}
                    color="primary"
                    >
                    <ArrowForward />
                  </IconButton>
                </InputAdornment>
              )
            }}
            />
            <Button
              onClick={this.handleSubmit}
              disableRipple
              disableTouchRipple
            >
              Add
            </Button>
          </FormControl>*/}
          <ComposedEmailField />
        </form>
        {content}
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items.items,
    hasErrored: state.items.hasErrored,
    isLoading: state.items.isLoading
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(itemsFetchData(url)),
    deleteItem: id => dispatch(itemsDeleteItem(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)
