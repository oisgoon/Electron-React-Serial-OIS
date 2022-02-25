import { useEffect, useRef, useState } from 'react';
import '../scss/ReceivePanel.scss';

const ReceivePanel = () => {
  const [receiveData, setReceiveData] = useState<string[]>([]);
  const scrollRef = useRef<any>();

  const onChange = () => {};

  const onTime = () => {
    window.electron.ipcRenderer.send('time', 'time');
  };

  const onReset = () => {
    setReceiveData([]);
    window.electron.ipcRenderer.send('reset', 'reset');
  };

  const onSave = () => {
    window.electron.ipcRenderer.send('save', 'save');
  };

  useEffect(() => {
    window.electron.ipcRenderer.receiveOnce('read_data', (data: any) => {
      setReceiveData(receiveData.concat(data));
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    });
  }, [receiveData]);

  return (
    <div className="receive_panel">
      <div className="receive_panel_title">
        Receive Data
        <div className="buttons">
          <div className="chk_botton">
            <input type="checkbox" onClick={onTime} />
            <div className="chk_botton_title">Time</div>
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
          value={receiveData.join('')}
          onChange={onChange}
          className="receive_data"
        />
      </fieldset>
    </div>
  );
};

export default ReceivePanel;
