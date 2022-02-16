import React from 'react';
import '../scss/ReceiveData.scss';
import Console from 'lib/console';

const ReceiveData = () => {
  const [receiveData, setReceiveData] = React.useState('test');
  const [saveData, setSaveData] = React.useState('');

  const onReset = () => {
    setReceiveData('');
    window.electron.ipcRenderer.send('reset', 'reset');
  };

  const onSave = () => {
    window.electron.ipcRenderer.send('save', 'save');
  };

  window.electron.ipcRenderer.receive('read_data', () => {
    Console.log('hihi');
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
        <textarea className="receive_data" value={receiveData} />
      </fieldset>
    </div>
  );
};

export default ReceiveData;
