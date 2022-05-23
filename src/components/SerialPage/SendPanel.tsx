import SendForm from './SendForm';
import '../../scss/SendPanel.scss';

const SendPanel = ({
  sendBtn,
  autoSendIDCallBack,
  autoSendStart,
  autoSendStartID,
  delay,
}: any) => {
  return (
    <div className="send_panel">
      <div className="send_panel_title">Send Data</div>
      <div className="send_panel_border">
        <div className="option_label">
          <div className="auto">Auto</div>
          <div className="send" />
          <div className="cr">CR</div>
          <div className="lf">LF</div>
          <div className="type">Type</div>
          <div className="data">Data</div>
        </div>
        <SendForm
          sendBtn={sendBtn}
          id="1"
          autoSendIDCallBack={autoSendIDCallBack}
          autoSendStart={autoSendStart}
          autoSendStartID={autoSendStartID}
          delay={delay}
        />
        <SendForm
          sendBtn={sendBtn}
          id="2"
          autoSendIDCallBack={autoSendIDCallBack}
          autoSendStart={autoSendStart}
          autoSendStartID={autoSendStartID}
          delay={delay}
        />
        <SendForm
          sendBtn={sendBtn}
          id="3"
          autoSendIDCallBack={autoSendIDCallBack}
          autoSendStart={autoSendStart}
          autoSendStartID={autoSendStartID}
          delay={delay}
        />
        <SendForm
          sendBtn={sendBtn}
          id="4"
          autoSendIDCallBack={autoSendIDCallBack}
          autoSendStart={autoSendStart}
          autoSendStartID={autoSendStartID}
          delay={delay}
        />
        <SendForm
          sendBtn={sendBtn}
          id="5"
          autoSendIDCallBack={autoSendIDCallBack}
          autoSendStart={autoSendStart}
          autoSendStartID={autoSendStartID}
          delay={delay}
        />
        <SendForm
          sendBtn={sendBtn}
          id="6"
          autoSendIDCallBack={autoSendIDCallBack}
          autoSendStart={autoSendStart}
          autoSendStartID={autoSendStartID}
          delay={delay}
        />
        <SendForm
          sendBtn={sendBtn}
          id="7"
          autoSendIDCallBack={autoSendIDCallBack}
          autoSendStart={autoSendStart}
          autoSendStartID={autoSendStartID}
          delay={delay}
        />
      </div>
    </div>
  );
};

export default SendPanel;
