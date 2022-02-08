import React from 'react';
import '../scss/SendForm.scss';

export default class SendForm extends React.PureComponent {
  render() {
    return (
      <div className="send_form">
        <input type="radio" name="auto" className="auto_chk" />
        <button type="button" className="send_button">
          Send
        </button>
        <input type="checkbox" className="cr_btn" />
        <input type="checkbox" className="lf_btn" />
        <select className="data_type">
          <option value="ASC">ASC</option>
          <option value="HEX">HEX</option>
        </select>
        <input className="data_input" />
      </div>
    );
  }
}
