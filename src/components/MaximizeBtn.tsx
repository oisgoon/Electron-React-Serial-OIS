import '../scss/MaximizeBtn.scss';
import Console from '../lib/console';
// const { ipcRenderer } = require('electron');

const onClickHandler = () => {
  Console.log('Maximize!!!');
  window.electron.ipcRenderer.on('maximize');
};

const MaximizeBtn = () => {
  return (
    <div>
      <div
        onClick={onClickHandler}
        onKeyPress={onClickHandler}
        role="button"
        tabIndex={0}
        className="maximize_btn"
      >
        □
      </div>
    </div>
  );
};

export default MaximizeBtn;
