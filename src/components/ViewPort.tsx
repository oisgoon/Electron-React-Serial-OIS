import React from 'react';
import '../scss/ViewPort.scss';
import CommSetting from './CommSetting';
import SendPanel from './SendPanel';

export default class ViewPort extends React.PureComponent {
  render() {
    return (
      <div className="view_port_template">
        <div className="view_port">
          View Port
          <CommSetting />
          <SendPanel />
        </div>
      </div>
    );
  }
}
