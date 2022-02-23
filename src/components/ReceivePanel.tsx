import React, { useEffect, useRef, useState } from 'react';
import '../scss/ReceivePanel.scss';
import Console from 'lib/console';

const ReceivePanel = () => {
  const [receiveData, setReceiveData] = useState<string[]>([]);
  let messageEnd: { scrollIntoView: (arg0: { behavior: string }) => void };

  const scrollToBottom = () => {
    messageEnd.scrollIntoView({ behavior: 'smooth' });
  };

  const time = new Date();
  const timeStamp = time.getTime();

  const scrollRef = useRef();

  const onChangeHandler = () => {};

  // $('#receive_data').scrollTop($('#receive_data')[0].scrollHeight);

  const onTime = () => {
    window.electron.ipcRenderer.send('time', 'time');
  };

  const onReset = () => {
    setReceiveData(receiveData.splice(0, receiveData.length));
    window.electron.ipcRenderer.send('reset', 'reset');
  };

  const onSave = () => {
    window.electron.ipcRenderer.send('save', 'save');
  };

  useEffect(() => {
    window.electron.ipcRenderer.receiveOnce('read_data', (data: any) => {
      setReceiveData(receiveData.concat(data));
      scrollToBottom();
      // setReceiveData(`${receiveData}${data}`);
      // state.logs = state.logs.concat(data);
    });
  }, [receiveData, scrollToBottom]);

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
          ref={(el: any) => {
            messageEnd = el;
          }}
          value={receiveData.join('')}
          onChange={onChangeHandler}
          className="receive_data"
        />
      </fieldset>
    </div>
  );
};

export default ReceivePanel;
