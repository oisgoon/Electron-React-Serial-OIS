import React from 'react';
import SendForm from './SendForm';
import '../scss/SendPanel.scss';

export default class SendPanel extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <div className="send_panel">
        <div className="send_panel_title">Send Data</div>
        <fieldset className="send_panel_border">
          <div className="option_label">
            <div className="auto">Auto</div>
            <div className="send" />
            <div className="cr">CR</div>
            <div className="lf">LF</div>
            <div className="type">Type</div>
            <div className="data">Data</div>
          </div>
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
