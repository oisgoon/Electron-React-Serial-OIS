import React from 'react';
import '../scss/SendForm.scss';

export default class SendForm extends React.PureComponent {
  render() {
    return (
      <div className="send_form">
        <input className="delay_time" value="0" />
        <button type="button" className="send_button">
          Send
        </button>
        <div className="cr_btn" />
        <div className="lf_btn" />
        <select className="data_type">
          <option value="ASC">ASC</option>
          <option value="HEX">HEX</option>
        </select>
        <input className="data_input" />
      </div>
    );
  }
}
