import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateInfo } from '../actions/userInfo.js'
import { addList } from '../actions/list.js'

class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      initDone: false
    }
  }
  componentDidMount() {
    this.props.userInfoAction({
      cityName: 'Shanghai'
    })
    console.log(this.props)
    setTimeout(() => {
      this.setState({
        initDone: true
      })
    }, 2000);
  }
  render() {
    let addListItem = this.props.addListItem
    return (
      <div>
        <div>
          App
          {
            this.state.initDone
            ? this.props.children
            : <div>正在加载中...</div>
          }
        </div>
        <input type="text" ref="itemContent"/>
        <button onClick={()=>{addListItem(this.refs.itemContent.value)}}>添加</button>
        
        <ul>
          {
            this.props.items.addList
            ? this.props.items.addList.map((item, index) => (
              <li key={index}>{item}</li>
            ))
            : ''
          } 
        </ul> 
      </div>
    )
  }
}
const mapState = (state) => {
  return {
    items: state
  }
}
const mapDispatch = (dispatch) => {
  return {
    userInfoAction: (data) => {
      dispatch(updateInfo(data))
    },
    addListItem : (item) => {
      console.log(item)
      dispatch(addList(item))
    }
  }
}

export default connect(
  mapState,
  mapDispatch
)(App)