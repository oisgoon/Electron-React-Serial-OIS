import SendForm from './SendForm';
import '../scss/SendPanel.scss';

const SendPanel = ({ sendBtn }: any) => {
  return (
    <div className="send_panel">
      <div className="send_panel_title">Send Data</div>
      <fieldset className="send_panel_border">
        <div className="option_label">
          <div className="auto">Auto</div>
          <div className="send" />
          <div className="cr">CR</div>
          <div className="lf">LF</div>
          <div className="type">Type</div>
          <div className="data">Data</div>
        </div>
        <SendForm sendBtn={sendBtn} />
        <SendForm sendBtn={sendBtn} />
        <SendForm sendBtn={sendBtn} />
        <SendForm sendBtn={sendBtn} />
        <SendForm sendBtn={sendBtn} />
        <SendForm sendBtn={sendBtn} />
        <SendForm sendBtn={sendBtn} />
      </fieldset>
    </div>
  );
};

export default SendPanel;
