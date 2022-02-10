import '../scss/MaximizeBtn.scss';
import Console from '../lib/console';

// const { ipcRenderer } = require('electron');

const onClickHandler = () => {
  Console.log('Maximize!!!');
  // ipcRenderer.once('ipc-example', (arg) => {
  //   Console.log(arg);
  // });
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
