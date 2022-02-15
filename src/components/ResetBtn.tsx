import Console from '../lib/console';

const onReset = () => {
  Console.log('Reset !!!');
};

const ResetBtn = () => {
  return (
    <button type="button" onClick={onReset} className="reset_button">
      Reset
    </button>
  );
};

export default ResetBtn;
