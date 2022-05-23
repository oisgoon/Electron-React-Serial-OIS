import '../../scss/MaximizeBtn.scss';
import Console from '../../lib/console';

const onClickHandler = () => {
  Console.log('Maximize!!!');
  window.electron.ipcRenderer.send('maximize', 'maximize');
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
