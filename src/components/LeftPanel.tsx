import CommSetting from './CommSetting';
import SendPanel from './SendPanel';
import CommBtn from './CommBtn';
import '../scss/LeftPanel.scss';

const LeftPanel = () => {
  return (
    <div className="left_panel">
      <CommSetting />
      <CommBtn />
      <SendPanel />
    </div>
  );
};

export default LeftPanel;
