import { useState } from 'react';
import Console from 'lib/console';
import CommSetting from './CommSetting';
import SendPanel from './SendPanel';
import CommBtn from './CommBtn';
import '../scss/LeftPanel.scss';

const LeftPanel = () => {
  const [connectBtn, setConnectBtn] = useState(true);
  const [sendBtn, setSendBtn] = useState(true);
  const [settingOpt, setSettingOpt] = useState(false);
  const [delayInput, setDelayInput] = useState(false);
  const [autoSendID, setAutoSendID] = useState('0');
  const [autoSendStart, setAutoSendStart] = useState(false);
  const [autoSendStartID, setAutoSendStartID] = useState('0');
  const [delay, setDelay] = useState<number>();

  const portCallback = (selectPort: any) => {
    setConnectBtn(selectPort);
  };

  const delayCallback = (delayValue: any) => {
    setDelay(delayValue);
  };

  const connectCallback = (connectStatus: any) => {
    setSendBtn(connectStatus);
    setSettingOpt(!connectStatus);
  };

  const startCallback = (startStatus: any) => {
    setSendBtn(startStatus);
    setDelayInput(startStatus);
    if (startStatus) {
      Console.log(autoSendID);
      setAutoSendStart(true);
      setAutoSendStartID(autoSendID);
    } else {
      setAutoSendStart(false);
    }
  };

  const autoSendIDCallBack = (IDValue: any) => {
    setAutoSendID(IDValue);
  };

  return (
    <div className="left_panel">
      <CommSetting
        portCallback={portCallback}
        delayCallback={delayCallback}
        settingOption={settingOpt}
        delayInput={delayInput}
      />
      <CommBtn
        connectBtn={connectBtn}
        connectCallback={connectCallback}
        startCallback={startCallback}
      />
      <SendPanel
        sendBtn={sendBtn}
        autoSendIDCallBack={autoSendIDCallBack}
        autoSendStart={autoSendStart}
        autoSendStartID={autoSendStartID}
        delay={delay}
      />
    </div>
  );
};

export default LeftPanel;
