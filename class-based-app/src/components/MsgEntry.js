import React, { Component } from 'react'
import './msgEntry.css'
import sendIcon from '../icons/send_icon.svg'
import imageIcon from '../icons/image_icon.svg'

export default class MsgEntry extends Component {
  constructor(){
    super();
    this.state = {textEle: null}
  }

  render() {
    let {on_send} = this.props;

    const on_enter = (eve)=>{
      if (!eve.key || eve.key === "Enter"){
        on_send(this.state.textEle.innerText);
        this.state.textEle.innerText = "";
      }
    }

    const textEle_setter = (ele)=>{
      this.setState({textEle: ele.target})
    }

    return (
      <div className='msg_entry_body'>
        <div contentEditable='true' className='entry_msg' onFocus={textEle_setter} suppressContentEditableWarning={true}></div>
        {/* <img src={imageIcon} alt="image_icon" className='image_button' onClick={on_enter}/> */}
        <img src={sendIcon} alt="send_icon" className='send_button' onClick={on_enter}/>
      </div>
    )
  }
}
