import { useCallback, useEffect, useRef, useState } from 'react';
import '../../scss/ReceivePanel.scss';
import Console from 'lib/console';

const ReceivePanel = () => {
  const [receiveData, setReceiveData] = useState<string[]>([]);
  const [timeStamp, setTimeStamp] = useState<string>('');
  const [timeStampUse, onTimeStampUse] = useState<boolean>(false);
  const [CR, setCR] = useState<string>('');
  const [LF, setLF] = useState<string>('');
  const [reset, setReset] = useState<boolean>(false);

  const scrollRef = useRef<any>();

  const today = new Date();

  const year = String(today.getFullYear());
  const month = String(today.getMonth());
  const date = String(today.getDate());
  const hours = String(today.getHours());
  const minutes = String(today.getMinutes());
  const seconds = String(today.getSeconds());
  const milliseconds = String(today.getMilliseconds());

  const onChange = () => {};

  const timeStampChange = useCallback(() => {
    setTimeStamp(
      `[${year.padStart(4)}/${month.padStart(2, '0')}/${date.padStart(
        2,
        '0'
      )}/${hours.padStart(2, '0')}:${minutes.padStart(
        2,
        '0'
      )}:${seconds.padStart(2, '0')}:${milliseconds.padStart(3, '0')}] `
    );
  }, [date, hours, milliseconds, minutes, month, seconds, year]);

  const onTimeStamp = () => {
    if (timeStampUse === false) {
      onTimeStampUse(true);
    } else {
      onTimeStampUse(false);
      setTimeStamp('');
    }
    window.electron.ipcRenderer.send('time', 'time');
  };

  const onReset = () => {
    setReset(true);
    setReceiveData([]);
    window.electron.ipcRenderer.send('reset', 'reset');
  };

  // const onSave = () => {
  //   window.electron.ipcRenderer.send('save', 'save');
  // };

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
      setReceiveData(receiveData.concat(`${data}`));
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    });
    // return () => {
    //   if (reset === true) {
    //     setReset(false);
    //     setReceiveData([]);
    //   }
    // };
  }, [receiveData, reset]);

  return (
    <div className="receive_panel">
      <div className="receive_panel_title">
        Receive Data
        <div className="buttons">
          <div className="cr_btn_receive">
            <input type="checkbox" onClick={CRCheck} />
            <div>CR</div>
          </div>
          <div className="lf_btn_receive">
            <input type="checkbox" onClick={LFCheck} />
            <div>LF</div>
          </div>
          {/* <div className="chk_botton">
            <label htmlFor="time" className="time_label">
              <input type="checkbox" onClick={onTimeStamp} id="time" />
              <div className="chk_botton_title">Time</div>
            </label>
          </div> */}
          <button type="button" onClick={onReset} className="button">
            Reset
          </button>
          {/* <button type="button" onClick={onSave} className="button">
            Save
          </button> */}
        </div>
      </div>
      <div className="receive_panel_border">
        <textarea
          ref={scrollRef}
          value={receiveData.join(`${CR}${LF}`)}
          onChange={onChange}
          className="receive_data"
        />
      </div>
    </div>
  );
};

export default ReceivePanel;
