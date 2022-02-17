import React from 'react';
import '../scss/SendForm.scss';

const SendForm = () => {
  const [sendData, setSendData] = React.useState('');

  const onSendData = () => {
    window.electron.ipcRenderer.send('send_data', sendData);
  };

  const onChange = (e: any) => {
    const { value } = e.target;
    setSendData(value);
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
        <input type="checkbox" />
      </div>
      <div className="lf_btn">
        <input type="checkbox" />
      </div>
      <select className="data_type">
        <option value="ASC">ASC</option>
        <option value="HEX">HEX</option>
      </select>
      <input value={sendData} onChange={onChange} className="data_input" />
    </div>
  );
};

export default SendForm;
