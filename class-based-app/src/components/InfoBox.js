import React, { Component } from 'react'
import './infoBox.css'

export default class InfoBox extends Component {
  constructor() {
    super();
    this.state = { name_val: null }
  }

  on_change_input = (ele) => {
    this.setState({ name_val: ele.target.value });
  }

  render() {
    let { id, on_clc_info, on_save_name } = this.props;

    return (
      <div className='info_box_body'>
        <div className='event_accessor' onClick={on_clc_info}></div>
        <div className='info_content'>
          <label>ID : {id}</label>
          <div className='entry_editable'>
            <label>NAME </label>
            <input type="text" onChange={this.on_change_input} />
            <button onClick={() => { on_save_name(this.state.name_val); on_clc_info() }}></button>
          </div>
        </div>
      </div>
    )
  }
}
