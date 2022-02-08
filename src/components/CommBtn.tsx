import React from 'react';
import '../scss/CommBtn.scss';

export default class CommBtn extends React.PureComponent {
  render(): React.ReactNode {
    return (
      <div className="comm_btns">
        <button type="button" className="connect_btn comm_btn">
          connect
        </button>
        <button type="button" className="start_btn comm_btn">
          Start
        </button>
      </div>
    );
  }
}
