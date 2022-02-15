import { useState } from 'react';
import '../scss/ReceiveData.scss';
import ResetBtn from './ResetBtn';

const ReceiveData = () => {
  const [receiveData] = useState();

  return (
    <div className="receive_panel">
      <div className="receive_panel_title">
        Receive Data
        <ResetBtn />
      </div>
      <fieldset className="receive_panel_border">
        <textarea className="receive_data" onChange={receiveData} />
      </fieldset>
    </div>
  );
};

export default ReceiveData;
