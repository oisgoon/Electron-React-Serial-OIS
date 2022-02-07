import React from 'react';
import SendForm from './SendForm';
import '../scss/SendPanel.scss';

export default class SendPanel extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <div className="send_panel">
        <div className="send_panel_title">Send Data</div>
        <fieldset className="send_panel_border">
          <SendForm />
          <SendForm />
          <SendForm />
          <SendForm />
          <SendForm />
          <SendForm />
          <SendForm />
          <SendForm />
        </fieldset>
      </div>
    );
  }
}
