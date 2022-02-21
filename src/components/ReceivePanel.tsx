import React from 'react';
import '../scss/ReceivePanel.scss';
import Console from 'lib/console';
import ReceiveList from './ReceiveList';

const ReceivePanel = () => {
  const [receiveData, setReceiveData] = React.useState('test');

  const state = { logs: '' };

  const onReset = () => {
    setReceiveData('');
    window.electron.ipcRenderer.send('reset', 'reset');
  };

  const onSave = () => {
    window.electron.ipcRenderer.send('save', 'save');
  };

  window.electron.ipcRenderer.receive('read_data', (data: any) => {
    // setReceiveData(data);
    state.logs = state.logs.concat(data);
  });

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
        <div className="receive_data">
          <ReceiveList />
        </div>
      </fieldset>
    </div>
  );
};

export default ReceivePanel;
