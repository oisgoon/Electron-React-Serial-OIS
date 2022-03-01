import { useState } from 'react';
import Console from 'lib/console';
import CommSetting from './CommSetting';
import SendPanel from './SendPanel';
import CommBtn from './CommBtn';
import '../scss/LeftPanel.scss';

const LeftPanel = () => {
  const [connectBtn, setConnectBtn] = useState(true);
  const [sendBtn, setSendBtn] = useState(true);

  const portCallback = (selectPort: any) => {
    setConnectBtn(selectPort);
    Console.log(connectBtn);
  };

  const connectCallback = (connectStatus: any) => {
    setSendBtn(connectStatus);
    Console.log(sendBtn);
  };

  const startCallback = (startStatus: any) => {
    setSendBtn(startStatus);
    Console.log(sendBtn);
  };

  return (
    <div className="left_panel">
      <CommSetting portCallback={portCallback} />
      <CommBtn
        connectBtn={connectBtn}
        connectCallback={connectCallback}
        startCallback={startCallback}
      />
      <SendPanel sendBtn={sendBtn} />
    </div>
  );
};

export default LeftPanel;
