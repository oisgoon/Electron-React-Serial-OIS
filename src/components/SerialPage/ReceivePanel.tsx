import { useEffect, useRef, useState } from 'react';
import '../../scss/ReceivePanel.scss';

const ReceivePanel = () => {
  const [receiveData, setReceiveData] = useState<string[]>([]);
  const [timeStampUse, onTimeStampUse] = useState<boolean>(false);
  const [CR, setCR] = useState<string>('');
  const [LF, setLF] = useState<string>('');
  const [reset, setReset] = useState<boolean>(false);

  const scrollRef = useRef<any>();

  const fillZero = (width: number, str: string) => {
    return str.length >= width
      ? str
      : new Array(width - str.length + 1).join('0') + str; // 남는 길이만큼 0으로 채움
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const currentTime = () => {
    const today = new Date();

    const year = fillZero(4, String(today.getFullYear()));
    const month = fillZero(2, String(today.getMonth()));
    const date = fillZero(2, String(today.getDate()));
    const hours = fillZero(2, String(today.getHours()));
    const minutes = fillZero(2, String(today.getMinutes()));
    const seconds = fillZero(2, String(today.getSeconds()));
    const milliseconds = fillZero(3, String(today.getMilliseconds()));

    return `[${year}.${month}.${date}.${hours}.${minutes}.${seconds}.${milliseconds}] `;
  };

  const onTimeStamp = () => {
    if (timeStampUse === false) {
      onTimeStampUse(true);
    } else {
      onTimeStampUse(false);
    }
    window.electron.ipcRenderer.send('time', 'time');
  };

  const onReset = () => {
    setReset(true);
    setReceiveData([]);
    window.electron.ipcRenderer.send('reset', 'reset');
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

  useEffect(() => {
    if (reset === true) {
      setReset(false);
      window.electron.ipcRenderer.remove('read_data');
    }

    window.electron.ipcRenderer.receiveOnce('read_data', (data: string) => {
      setReceiveData(
        receiveData.concat(
          `${timeStampUse ? currentTime() : ''}${data}${CR}${LF}`
        )
      );
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    });
  }, [CR, LF, currentTime, receiveData, reset, timeStampUse]);

  return (
    <div className="receive_panel">
      <div className="receive_panel_title">
        Receive Data
        <div className="buttons">
          <div className="cr_btn_receive">
            <input type="checkbox" onClick={CRCheck} className="chk_box" />
            <div>CR</div>
          </div>
          <div className="lf_btn_receive">
            <input type="checkbox" onClick={LFCheck} className="chk_box" />
            <div>LF</div>
          </div>
          <div className="reset_btn_receive">
            <input type="checkbox" onClick={onTimeStamp} className="chk_box" />
            <div>Time</div>
          </div>
          <button type="button" onClick={onReset} className="button">
            Reset
          </button>
        </div>
      </div>
      <div className="receive_panel_border">
        <textarea
          ref={scrollRef}
          value={receiveData.join('')}
          className="receive_data"
        />
      </div>
    </div>
  );
};

export default ReceivePanel;
