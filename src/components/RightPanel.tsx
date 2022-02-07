import React from 'react';
import ReceiveData from './ReceiveData';
import '../scss/RightPanel.scss';

export default class RigthPanel extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <div className="right_panel">
        <ReceiveData />
      </div>
    );
  }
}
