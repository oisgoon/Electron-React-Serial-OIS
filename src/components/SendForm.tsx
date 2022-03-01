import React, { useState } from 'react';
import '../scss/SendForm.scss';
import Console from 'lib/console';

const SendForm = ({ sendBtn }: any) => {
  const [sendData, setSendData] = useState<string>('');
  const [autoCheck, setAutoCheck] = useState(false);
  const [CR, setCR] = useState<string>('');
  const [LF, setLF] = useState<string>('');

  const AutoCheck = () => {};

  const onChangeType = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    window.electron.ipcRenderer.send('send_type', e.target.value);
    if (e.target.value === 'HEX') {
      let hex = '';
      let tempASCII;
      let tempHEX;
      // eslint-disable-next-line array-callback-return
      sendData.split('').map((i) => {
        tempASCII = i.charCodeAt(0);
        tempHEX = tempASCII.toString(16);
        hex = `${hex + tempHEX} `;
      });
      hex = hex.trim();
      setSendData(hex);
    } else if (e.target.value === 'ASC') {
      let stringOut = '';
      // eslint-disable-next-line array-callback-return
      sendData.split(' ').map((i) => {
        const tempAsciiCode = parseInt(i, 16);
        stringOut += String.fromCharCode(tempAsciiCode);
        setSendData(stringOut);
      });
    }
  };

  const onSendData = () => {
    window.electron.ipcRenderer.send('send_data', sendData + CR + LF);
  };

  const onChange = (e: any) => {
    const { value } = e.target;
    setSendData(value);
    Console.log(value);
  };

  const CRCheck = () => {
    window.electron.ipcRenderer.send('CR_Check', 'CR_Check');
    if (CR === '') {
      setCR(`\r`);
    } else {
      setCR(``);
    }
  };

  const LFCheck = () => {
    window.electron.ipcRenderer.send('LF_Check', 'LF_Check');
    if (LF === '') {
      setLF(`\n`);
    } else {
      setLF(``);
    }
  };

  return (
    <div className="send_form">
      <div className="auto_chk">
        <input type="radio" name="auto" onClick={AutoCheck} />
      </div>
      <button
        type="button"
        onClick={onSendData}
        disabled={sendBtn}
        className="send_button"
      >
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
