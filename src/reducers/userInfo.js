import * as actionType from '../constants/constants.js'

export default (state={}, action) => {
  switch (action.type) {
    case actionType.UPDATE_INFO:
      return action.data
    default:
      return state;
  }
}
