import '../scss/SendForm.scss';

const SendForm = () => {
  return (
    <div className="send_form">
      <div className="auto_chk">
        <input type="radio" name="auto" />
      </div>
      <button type="button" className="send_button">
        Send
      </button>
      <div className="cr_btn">
        <input type="checkbox" />
      </div>
      <div className="lf_btn">
        <input type="checkbox" />
      </div>
      <select className="data_type">
        <option value="ASC">ASC</option>
        <option value="HEX">HEX</option>
      </select>
      <input className="data_input" />
    </div>
  );
};

export default SendForm;
