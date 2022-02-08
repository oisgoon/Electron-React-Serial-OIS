import React from 'react';
import '../scss/SendForm.scss';

export default class SendForm extends React.PureComponent {
  render() {
    return (
      <div className="send_form">
        <div className="auto_chk">
          <input type="radio" name="auto" />
        </div>
        <button type="button" className="send_button">
          Send
        </button>
        <div className="cr_btn">
          <input type="checkbox" />
        </div>
        <div className="lf_btn">
          <input type="checkbox" />
        </div>
        <select className="data_type">
          <option value="ASC">ASC</option>
          <option value="HEX">HEX</option>
        </select>
        <input className="data_input" tabIndex="1" />
      </div>
    );
  }
}
