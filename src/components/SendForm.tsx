import React, { useEffect, useState } from 'react';
import '../scss/SendForm.scss';
import Console from 'lib/console';

let autoSendInterval: any;

const SendForm = ({
  sendBtn,
  id,
  autoSendIDCallBack,
  autoSendStart,
  autoSendStartID,
  delay,
}: any) => {
  const [sendData, setSendData] = useState<string>('');
  const [autoCheck, setAutoCheck] = useState(false);
  const [CR, setCR] = useState<string>('');
  const [LF, setLF] = useState<string>('');

  const autoSend = () => {
    if (id === autoSendStartID) {
      if (autoSendStart === true) {
        autoSendInterval = setInterval(function () {
          window.electron.ipcRenderer.send('send_data', sendData + CR + LF);
        }, delay);
      } else {
        clearInterval(autoSendInterval);
      }
    }
  };

  useEffect(() => {
    autoSend();
  });

  const isAutoCheck = () => {
    Console.log(`Send ID : ${id}`);
    autoSendIDCallBack(id);
  };

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
        <input
          type="radio"
          name="auto"
          onClick={isAutoCheck}
          disabled={sendBtn}
        />
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
        <input type="checkbox" onClick={CRCheck} disabled={sendBtn} />
      </div>
      <div className="lf_btn">
        <input type="checkbox" onClick={LFCheck} disabled={sendBtn} />
      </div>
      <select onChange={onChangeType} disabled={sendBtn} className="data_type">
        <option value="ASC">ASC</option>
        <option value="HEX">HEX</option>
      </select>
      <input
        value={sendData}
        onChange={onChange}
        disabled={sendBtn}
        className="data_input"
      />
    </div>
  );
};

export default SendForm;
