import React, { Component } from 'react'
import './chatArea.css'

export default class ChatArea extends Component {
  render() {
    let {ele_arr} = this.props;
    return (
      <div className='chat_area_body'>
        {ele_arr}
      </div>
    )
  }
}
