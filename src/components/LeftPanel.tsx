import React from 'react';
import CommSetting from './CommSetting';
import SendPanel from './SendPanel';
import '../scss/LeftPanel.scss';

export default class LeftPanel extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <div className="left_panel">
        <CommSetting />
        <SendPanel />
      </div>
    );
  }
}
