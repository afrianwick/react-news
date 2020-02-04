import React from 'react'
import { connect } from 'react-redux'

import { CHANGE_LOADING } from '../store/types/loading'

class BasicRedux extends React.Component {
  constructor() {
    super()

    this.changeState = this.changeState.bind(this)
    this.changeText = this.changeText.bind(this)
  }

  changeState() {
    this.props.changeLoading()
  }

  changeText(e) {
    const text = e.target.value

    this.props.changeMessage(text)
  }

  render() {
    return(
      <div>
        <h3>{this.props.message}</h3>
        {
          this.props.loading && <input type="text" onChange={this.changeText} />
        }
        <h4 onDoubleClick={this.changeState}>toggle form</h4>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    message: state.message.message,
    loading: state.loading.loading
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeMessage: (message) => dispatch({
      type: 'changeMessage',
      message: message
    }),
    changeLoading: () => dispatch({
      type: CHANGE_LOADING
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasicRedux)
