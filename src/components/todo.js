import React, {Component} from "react";
import {connect} from "react-redux";
import {itemInputChange, itemsCreateItem, itemsDeleteItem, itemsFetchData} from "../modules/actions/items";

import {
  List,
  ListItem,
  IconButton,
  Container,
  TextField,
  Button,
  FormControl,
  InputAdornment,
  Typography
} from "@material-ui/core";
import {ArrowForward} from "@material-ui/icons"
import DeleteIcon from "@material-ui/icons/Delete";

class ToDo extends Component {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  componentDidMount() {
    this.props.fetchData(process.env.REACT_APP_API_ROOT+'items')//'http://5d0809c9fa0025001457866d.mockapi.io/items')
  }
  
  handleChange(e){
    this.props.onChangeItem(e.target.value)
  }
  
  handleSubmit(e){
    e.preventDefault()
    this.props.createItem(this.props.item)
    this.props.onChangeItem('')
  }
  
  handleDelete(id){
    this.props.deleteItem(id)
  }
  
  render() {
    const {hasErrored, isLoading, items, item} = this.props
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
        <form onSubmit={this.handleSubmit} noValidate autoComplete="off">
          <FormControl>
          <TextField
            variant="outlined"
            label="New Task"
            value={item}
            onChange={this.handleChange}error
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
          </FormControl>
          <FormControl>
            <Button
              onClick={this.handleSubmit}
              disableRipple
              disableTouchRipple
            >
              Add
            </Button>
          </FormControl>
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
    isLoading: state.items.isLoading,
    item: state.items.item
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(itemsFetchData(url)),
    deleteItem: id => dispatch(itemsDeleteItem(id)),
    createItem: task => dispatch(itemsCreateItem(task)),
    onChangeItem: item => dispatch(itemInputChange(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)
