import React from 'react';
import '../scss/ViewPort.scss';
import LeftPanel from './LeftPanel';
import RigthPanel from './RightPanel';

export default class ViewPort extends React.PureComponent {
  render() {
    return (
      <div className="view_port_template">
        <div className="view_port">
          <LeftPanel />
          <RigthPanel />
        </div>
      </div>
    );
  }
}
