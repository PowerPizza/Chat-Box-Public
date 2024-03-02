import React, { Component } from 'react'
import './headerBar.css'

export default class HeaderBar extends Component {
  // constructor(){
  //   super();
  // }
  render() {
    let {on_clc_info} = this.props;
    
    return (
      <div className='header_bar_body'>
        <p>Chat Box - 1.0</p>
        <div className='my_info'>
          <button className='info_btn' onClick={on_clc_info}></button>
        </div>
      </div>
    )
  }
}
