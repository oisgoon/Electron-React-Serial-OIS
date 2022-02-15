import '../scss/MinimizeBtn.scss';
import Console from '../lib/console';

const onClickHandler = () => {
  Console.log('Minimize!!!');
  // window.electron.ipcRenderer.once('ipc-example', (arg: unknown) => {
  //   Console.log(arg);
  // });
  // window.electron.ipcRenderer.myPing();
  window.electron.ipcRenderer.send('minimize');
  // window.electron.ipcRenderer.receive('minimize', (data: any) => {
  //   Console.log(`receive${data}`);
  // });
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
