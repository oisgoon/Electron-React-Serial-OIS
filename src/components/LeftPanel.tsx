import React from 'react';
import CommSetting from './CommSetting';
import SendPanel from './SendPanel';
import CommBtn from './CommBtn';
import '../scss/LeftPanel.scss';

export default class LeftPanel extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <div className="left_panel">
        <CommSetting />
        <CommBtn />
        <SendPanel />
      </div>
    );
  }
}
