import { useState } from 'react';
import '../../scss/CommBtn.scss';

const CommBtn = ({ connectBtn, connectCallback, startCallback }: any) => {
  const [isConnect, setConnect] = useState('Connect');
  const [isStart, setStart] = useState('Start');
  const [startBtn, setStartBtn] = useState(true);

  const onConnect = () => {
    if (isConnect === 'Connect') {
      setConnect('Disconnect');
      setStartBtn(false);
      connectCallback(false);
    } else {
      setConnect('Connect');
      setStart('Start');
      setStartBtn(true);
      connectCallback(true);
    }
    window.electron.ipcRenderer.send('connect', isConnect);
  };

  const onStart = () => {
    if (isStart === 'Start') {
      setStart('Stop');
      startCallback(true);
    } else {
      setStart('Start');
      startCallback(false);
    }
    window.electron.ipcRenderer.send('start', isStart);
  };

  return (
    <div className="comm_btns">
      <button
        type="button"
        onClick={onConnect}
        disabled={connectBtn}
        className="connect_btn comm_btn"
      >
        {isConnect}
      </button>
      <button
        type="button"
        onClick={onStart}
        disabled={startBtn}
        className="start_btn comm_btn"
      >
        {isStart}
      </button>
    </div>
  );
};

export default CommBtn;
