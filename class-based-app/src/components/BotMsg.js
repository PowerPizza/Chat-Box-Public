import React, { Component } from 'react'
import './botMsg.css'

export default class BotMsg extends Component {
  // Actually its the component of messages other then yours. This app was ment to be chat bot but I maded it chat box. XD
  render() {
    let {msg_content, user_id, user_name} = this.props;
    return (
      <div className='bot_msg_body'>
        <span className='small_triangle'></span>
        <div className='msg_content'>
            <span className='bot_lbl'>{user_name} [ID : {user_id}]</span>
            <div className='hr_line'></div>
            <p className='message_'>{msg_content}</p>
        </div>
      </div>
    )
  }
}
