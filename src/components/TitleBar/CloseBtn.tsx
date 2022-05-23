import '../../scss/CloseBtn.scss';
import Console from '../../lib/console';

const onClickHandler = () => {
  Console.log('Close !!!');
  window.electron.ipcRenderer.send('close', 'close');
};

const CloseBtn = () => {
  return (
    <div>
      <div
        onClick={onClickHandler}
        onKeyPress={onClickHandler}
        role="button"
        tabIndex={0}
        className="close_btn"
      >
        Ⅹ
      </div>
    </div>
  );
};

export default CloseBtn;
