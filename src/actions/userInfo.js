import * as actionType from '../constants/constants.js'

export function updateInfo(data){
  return {
    type: actionType.UPDATE_INFO,
    data
  }
  
}