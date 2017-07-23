import { combineReducers } from 'redux'
import updateInfo from './userInfo.js'
import addList from './list.js'

export default combineReducers({
  updateInfo,
  addList
})