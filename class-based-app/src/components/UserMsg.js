import React, { Component } from 'react'
import './userMsg.css'

export default class UserMsg extends Component {
  componentDidMount(){
    document.querySelector(".chat_area_body").scroll(0, document.querySelector(".chat_area_body").scrollHeight);
  }

  render() {
    let {msg_content, user_id, user_name} = this.props;
    return (
        <div className='user_msg_body'>
            <span className='small_triangle'></span>
            <div className='msg_content'>
                <span className='user_lbl'>{user_name} [ID: {user_id}]</span>
                <div className='hr_line'></div>
                <p className='message_'>{msg_content}</p>
            </div>
        </div>
    )
  }
}
