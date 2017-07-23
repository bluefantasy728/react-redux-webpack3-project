import * as actionType from '../constants/constants.js'

export function addList(item){
  return {
    type: actionType.ADD_LIST,
    item
  }
  
}