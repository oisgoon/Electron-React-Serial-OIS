import React from 'react';
import '../scss/CommBtn.scss';

const CommBtn = () => {
  const [isConnect, setConnect] = React.useState('Connect');
  const [isStart, setStart] = React.useState('Start');

  const onConnect = () => {
    if (isConnect === 'Connect') {
      setConnect('Disconnect');
    } else {
      setConnect('Connect');
    }
    window.electron.ipcRenderer.send('connect', isConnect);
  };

  const onStart = () => {
    if (isStart === 'Start') {
      setStart('Stop');
    } else {
      setStart('Start');
    }
    window.electron.ipcRenderer.send('start', isStart);
  };

  return (
    <div className="comm_btns">
      <button
        type="button"
        onClick={onConnect}
        className="connect_btn comm_btn"
      >
        {isConnect}
      </button>
      <button type="button" onClick={onStart} className="start_btn comm_btn">
        {isStart}
      </button>
    </div>
  );
};

export default CommBtn;
