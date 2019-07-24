export const ITEMS_ACTIONS = {
  ITEMS_HAS_ERRORED: 'ITEMS_HAS_ERRORED',
  ITEMS_IS_LOADING: 'ITEMS_IS_LOADING',
  ITEMS_FETCH_DATA_SUCCESS: 'ITEMS_FETCH_DATA_SUCCESS',
  ITEMS_CREATE_ITEM: 'ITEMS_CREATE_ITEM',
  ITEMS_DELETE_ITEM: 'ITEMS_DELETE_ITEM'
}

export function itemsHasErrored(bool) {
  return {
    type: ITEMS_ACTIONS.ITEMS_HAS_ERRORED,
    hasErrored: bool
  }
}
export function itemsIsLoading(bool) {
  return{
    type: ITEMS_ACTIONS.ITEMS_IS_LOADING,
    isLoading: bool
  }
}
export function itemsFetchDataSuccess(items) {
  return{
    type: ITEMS_ACTIONS.ITEMS_FETCH_DATA_SUCCESS,
    items: items
  }
}
export function itemsCreate(task) {
  return{
    type: ITEMS_ACTIONS.ITEMS_CREATE_ITEM,
    payload: task
  }
}
export function itemsDelete(id) {
  return{
    type: ITEMS_ACTIONS.ITEMS_DELETE_ITEM,
    payload: id
  }
}

export function itemsFetchData(url) {
  return dispatch => {
    dispatch(itemsIsLoading(true))
    
    fetch(url)
      .then(res => {
        if(!res.ok){
          throw Error(res.statusText)
        }
        dispatch(itemsIsLoading(false))
        return res
      })
      .then(res => res.json())
      .then(items => dispatch(itemsFetchDataSuccess(items)))
      .catch(e => {
        console.log(e)
        dispatch(itemsHasErrored(true))
      })
  }
}
export function itemsDeleteItem(id) {
  return dispatch => {
    dispatch(itemsIsLoading(true))
    dispatch(itemsDelete(id))
    setTimeout(()=>{
      dispatch(itemsIsLoading(false))
    },500)
  }
}
export function itemsCreateItem(task) {
  return dispatch => {
    dispatch(itemsIsLoading(true))
    dispatch(itemsCreate(task))
    setTimeout(()=>{
      dispatch(itemsIsLoading(false))
    },500)
  }
}
