import '../scss/MinimizeBtn.scss';
import { ipcRenderer } from 'electron';
import Console from '../lib/console';

const onClickHandler = () => {
  Console.log('Minimize!!!');
  ipcRenderer.send('minimize', () => {});
};

const MinimizeBtn = () => {
  return (
    <div>
      <div
        onClick={onClickHandler}
        onKeyPress={onClickHandler}
        role="button"
        tabIndex={0}
        className="minimize_btn"
      >
        ―
      </div>
    </div>
  );
};
export default MinimizeBtn;
