import React, { useEffect, useState } from 'react';
import '../scss/ReceivePanel.scss';
import Console from 'lib/console';
import ReceiveList from './ReceiveList';

const ReceivePanel = () => {
  const [receiveData, setReceiveData] = useState('');

  const onReset = () => {
    // setReceiveData('');
    window.electron.ipcRenderer.send('reset', 'reset');
  };

  const onSave = () => {
    window.electron.ipcRenderer.send('save', 'save');
  };

  useEffect(() => {
    window.electron.ipcRenderer.receiveOnce('read_data', (data: any) => {
      setReceiveData(`${receiveData}\r\n${data}`);
      Console.log(data);
      // state.logs = state.logs.concat(data);
    });
  }, [receiveData]);

  return (
    <div className="receive_panel">
      <div className="receive_panel_title">
        Receive Data
        <div className="buttons">
          <button type="button" onClick={onReset} className="reset_button">
            Reset
          </button>
          <button type="button" onClick={onSave} className="reset_button">
            Save
          </button>
        </div>
      </div>
      <fieldset className="receive_panel_border">
        <div className="receive_data">{receiveData}</div>
      </fieldset>
    </div>
  );
};

export default ReceivePanel;
