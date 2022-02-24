import React from 'react';
import '../scss/SendForm.scss';

const SendForm = () => {
  const [sendData, setSendData] = React.useState('');

  const onChangeType = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    window.electron.ipcRenderer.send('send_type', e.target.value);
  };

  const onSendData = () => {
    window.electron.ipcRenderer.send('send_data', sendData);
  };

  const onChange = (e: any) => {
    const { value } = e.target;
    setSendData(value);
  };

  const CRCheck = () => {
    window.electron.ipcRenderer.send('CR_Check', 'CR_Check');
  };

  const LFCheck = () => {
    window.electron.ipcRenderer.send('LF_Check', 'LF_Check');
  };

  return (
    <div className="send_form">
      <div className="auto_chk">
        <input type="radio" name="auto" />
      </div>
      <button type="button" onClick={onSendData} className="send_button">
        Send
      </button>
      <div className="cr_btn">
        <input type="checkbox" onClick={CRCheck} />
      </div>
      <div className="lf_btn">
        <input type="checkbox" onClick={LFCheck} />
      </div>
      <select onChange={onChangeType} className="data_type">
        <option value="ASC">ASC</option>
        <option value="HEX">HEX</option>
      </select>
      <input value={sendData} onChange={onChange} className="data_input" />
    </div>
  );
};

export default SendForm;
