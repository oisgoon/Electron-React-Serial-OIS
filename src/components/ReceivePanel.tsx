import { useEffect, useRef, useState } from 'react';
import '../scss/ReceivePanel.scss';
import Console from 'lib/console';

const ReceivePanel = () => {
  const [receiveData, setReceiveData] = useState<string[]>([]);
  const [timeStamp, setTimeStamp] = useState<string>('');
  const [timeStampUse, onTimeStampUse] = useState<boolean>(false);
  const [lineControl, setLineControl] = useState<string>('');
  const scrollRef = useRef<any>();

  const onChange = () => {};

  const timeStampChange = () => {
    if (timeStampUse) {
      const today = new Date();

      const year = String(today.getFullYear());
      const month = String(today.getMonth());
      const date = String(today.getDate());
      const day = today.getDay();
      const hours = String(today.getHours());
      const minutes = String(today.getMinutes());
      const seconds = String(today.getSeconds());
      const milliseconds = String(today.getMilliseconds());
      let strDay;

      switch (day) {
        case 0:
          strDay = 'Sun';
          break;
        case 1:
          strDay = 'Mon';
          break;
        case 2:
          strDay = 'Tus';
          break;
        case 3:
          strDay = 'Wed';
          break;
        case 4:
          strDay = 'Thu';
          break;
        case 5:
          strDay = 'Fri';
          break;
        case 6:
          strDay = 'Sat';
          break;
        default:
          break;
      }

      setTimeStamp(
        `[${year.padStart(4)}/${month.padStart(2, '0')}/${date.padStart(
          2,
          '0'
        )}/${strDay}/${hours.padStart(2, '0')}:${minutes.padStart(
          2,
          '0'
        )}:${seconds.padStart(2, '0')}:${milliseconds.padStart(3, '0')}] `
      );
    } else {
      setTimeStamp('');
    }
  };

  const onTimeStamp = () => {
    window.electron.ipcRenderer.send('time', 'time');
    if (lineControl === '') {
      setLineControl('\n');
      onTimeStampUse(true);
      timeStampChange();
    } else {
      setLineControl('');
      onTimeStampUse(false);
      setTimeStamp('');
    }
  };

  const onReset = () => {
    setReceiveData([]);
    window.electron.ipcRenderer.send('reset', 'reset');
  };

  const onSave = () => {
    window.electron.ipcRenderer.send('save', 'save');
  };

  useEffect(() => {
    window.electron.ipcRenderer.receiveOnce('read_data', (data: string) => {
      setReceiveData(receiveData.concat(`${timeStamp}${data}`));
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    });
    return () => {
      timeStampChange();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [receiveData, timeStamp]);

  return (
    <div className="receive_panel">
      <div className="receive_panel_title">
        Receive Data
        <div className="buttons">
          <div className="chk_botton">
            <label htmlFor="time" className="time_label">
              <input type="checkbox" onClick={onTimeStamp} id="time" />
              <div className="chk_botton_title">Time</div>
            </label>
          </div>
          <button type="button" onClick={onReset} className="button">
            Reset
          </button>
          <button type="button" onClick={onSave} className="button">
            Save
          </button>
        </div>
      </div>
      <fieldset className="receive_panel_border">
        <textarea
          ref={scrollRef}
          value={receiveData.join(`${lineControl}`)}
          onChange={onChange}
          className="receive_data"
        />
      </fieldset>
    </div>
  );
};

export default ReceivePanel;
