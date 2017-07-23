import * as actionType from '../constants/constants.js'

export default (state=[], action) => {
  switch (action.type) {
    case actionType.ADD_LIST:
      return [action.item, ...state]
    default:
      return state;
  }
}