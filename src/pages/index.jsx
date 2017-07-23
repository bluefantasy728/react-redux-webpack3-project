import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActionFromOtherFile from '../actions/userInfo.js'

class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      initDone: false
    }
  }
  componentDidMount() {
    console.log(this.props.userInfoAction.updateInfo)
    this.props.userInfoAction.updateInfo({
      cityName: 'Shanghai'
    })

    setTimeout(() => {
      this.setState({
        initDone: true
      })
      console.log(this.props)
    }, 2000);
  }
  render() {
    return (
      <div>
        App
        {
          this.state.initDone
          ? this.props.children
          : <div>正在加载中...</div>
        }
      </div>
    )
  }
}
const mapState = (state) => {
  return {
  }
}
const mapDispatch = (dispatch) => {
  return {
    userInfoAction: bindActionCreators(userInfoActionFromOtherFile, dispatch)
  }
}
export default connect(
  mapState,
  mapDispatch
)(App)