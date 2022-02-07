import React from 'react';
import ReadData from './ReadData';
import '../scss/RightPanel.scss';

export default class RigthPanel extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <div className="right_panel">
        RightPanel
        <ReadData />
      </div>
    );
  }
}
