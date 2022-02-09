import '../scss/CommBtn.scss';

const CommBtn = () => {
  return (
    <div className="comm_btns">
      <button type="button" className="connect_btn comm_btn">
        Connect
      </button>
      <button type="button" className="start_btn comm_btn">
        Start
      </button>
    </div>
  );
};

export default CommBtn;
