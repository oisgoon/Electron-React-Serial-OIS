import '../scss/ReceiveData.scss';
import Console from '../lib/console';

const onReset = () => {
  Console.log('Reset !!!');
};

const ReceiveData = () => {
  return (
    <div className="receive_panel">
      <div className="receive_panel_title">
        Receive Data
        <button type="button" onClick={onReset} className="reset_button">
          Reset
        </button>
      </div>
      <fieldset className="receive_panel_border">
        <textarea className="receive_data" />
      </fieldset>
    </div>
  );
};

export default ReceiveData;
