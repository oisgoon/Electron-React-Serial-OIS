import React from 'react';
import '../scss/ReceiveData.scss';

const ReceiveData = () => {
  const [receiveData, setReceiveData] = React.useState('');

  const onReset = () => {
    setReceiveData('');
  };

  return (
    <div className="receive_panel">
      <div className="receive_panel_title">
        Receive Data
        <button type="button" onClick={onReset} className="reset_button">
          Reset
        </button>
      </div>
      <fieldset className="receive_panel_border">
        <textarea className="receive_data" value={receiveData} />
      </fieldset>
    </div>
  );
};

export default ReceiveData;
