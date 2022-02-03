import React from 'react';
import SendForm from './SendForm';
import '../scss/SendPanel.scss';

export default class SendPanel extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <div className="send_panel">
        <div>SendPanel</div>
        <SendForm />
        <SendForm />
        <SendForm />
        <SendForm />
        <SendForm />
        <SendForm />
        <SendForm />
        <SendForm />
      </div>
    );
  }
}
