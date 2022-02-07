import React from 'react';
import '../scss/ReceiveData.scss';

export default class ReceiveData extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <div className="receive_panel">
        <div className="receive_panel_title">Receive Data</div>
        <fieldset className="receive_panel_border">
          <textarea className="receive_data" />
        </fieldset>
      </div>
    );
  }
}
