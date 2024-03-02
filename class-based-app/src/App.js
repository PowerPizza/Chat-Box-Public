import './App.css';

import React, { Component } from 'react'
import HeaderBar from './components/HeaderBar';
import ChatArea from './components/ChatArea';
import MsgEntry from './components/MsgEntry';
import UserMsg from './components/UserMsg';
import BotMsg from './components/BotMsg';
import InfoBox from './components/InfoBox';

const my_id = String(Math.random()*1000).replace(".", "@").slice(0, 12);
let my_name = null;
export default class App extends Component {
  constructor(){
    super();
    this.state = {after_name_entry: null, curr_session_msg: [], unique_key_counter: 0, last_loaded_msg_idx: null, info_box_: null}
  }

  message_loader = async ()=>{
    // console.log("loaded");
    let data_ = await fetch("/get_chat", {method: "POST"});
    data_ = await data_.json();
    // console.log(data_);
    data_["chatlist"].forEach(element => {
      if (element["msg_idx"] == this.state.last_loaded_msg_idx || element["user_id"] == my_id){
        return;
      }

      let last_msgs = this.state.curr_session_msg;
      last_msgs.push(<BotMsg msg_content={element["message"]} user_id={element["user_id"]} user_name={element["user_name"]} key={this.state.unique_key_counter}/>);
      this.setState({curr_session_msg: last_msgs, unique_key_counter: this.state.unique_key_counter+1, last_loaded_msg_idx: element["msg_idx"]});
    });
  }

  on_chat_entry = async (text)=>{
    // when chat send by clicking send btn so this executes...
    if (!text.length){
      return;
    }
    let last_msgs = this.state.curr_session_msg;
    last_msgs.push(<UserMsg msg_content={text} user_id={my_id} user_name={my_name} key={this.state.unique_key_counter}/>);
    this.setState({curr_session_msg: last_msgs, unique_key_counter: this.state.unique_key_counter+1});
    
    let http_resp = await fetch("/add_chat", {
      method: "POST", 
      body: JSON.stringify({"user_id": my_id, "user_name": my_name, "message": text})
    });
    if (await http_resp.text() !== "OK"){
      alert("Failed To send Chat..");
    }
  }

  on_clc_save_name = (name)=>{
    my_name = name;
  }
  on_clc_info_btn = (eve)=>{
    // this function will be called when info button of header bar clicked and also called when user click in blank area of display.
    if (this.state.info_box_){
      this.setState({info_box_: null});
    }
    else{
      this.setState({info_box_: <InfoBox id={my_id} on_clc_info={this.on_clc_info_btn} on_save_name={this.on_clc_save_name}/>});
    }
  }

  componentDidMount(){  // only comment while development...
    setInterval(this.message_loader, 1000);
  }

  render() {
    return (
      <>
        {this.state.info_box_}
        <HeaderBar on_clc_info={this.on_clc_info_btn}/>
        <ChatArea ele_arr={this.state.curr_session_msg}/>
        <MsgEntry on_send={this.on_chat_entry} />
      </>
    )
  }
}

