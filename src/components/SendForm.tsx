import React from 'react';
import '../scss/SendForm.scss';

export default class SendForm extends React.PureComponent {
  render() {
    return (
      <div className="send_form">
        <input className="input_value" value="0" />
        <button type="button">Send</button>
        <input className="data_input" />
      </div>
    );
  }
}
