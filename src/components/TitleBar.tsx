import MinimizeBtn from './MinimizeBtn';
import MaximizeBtn from './MaximizeBtn';
import CloseBtn from './CloseBtn';
import '../scss/TitleBar.scss';
import icon from '../../assets/icon_red.svg';

declare global {
  interface Window {
    electron: any;
  }
}

export interface IElectronAPI {
  ipcRenderer: any;
}

const TitleBar = () => {
  return (
    <div className="title_bar">
      <div className="program_icon">
        <img width="32px" alt="icon" src={icon} />
      </div>
      <div className="title">Cummunication Test - Client - OIS</div>
      <div className="control_btn">
        <MinimizeBtn />
        <MaximizeBtn />
        <CloseBtn />
      </div>
    </div>
  );
};

export default TitleBar;
