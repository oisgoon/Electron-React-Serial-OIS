import React from 'react';
import '../scss/CommSetting.scss';

export default class CommSetting extends React.PureComponent {
  render() {
    return (
      <div className="comm_setting">
        <div className="comm_title">Comm Setting</div>
        <fieldset className="comm_setting_border">
          <div className="comm_elements">
            <div className="comm_element">
              <div className="comm_item">ComPort</div>
              <select id="comport" className="comm_input">
                <option>Select Port!!!</option>
              </select>
            </div>
            <div className="comm_element">
              <div className="comm_item">BaudRate</div>
              <select id="baudrate" className="comm_input">
                <option value="9600">9600</option>
                <option value="19200">19200</option>
                <option value="38400">38400</option>
                <option value="57600">57600</option>
                <option value="115200">115200</option>
              </select>
            </div>
            <div className="comm_element">
              <div className="comm_item">DataLength</div>
              <select id="datalength" className="comm_input">
                <option value="8">8</option>
                <option value="7">7</option>
              </select>
            </div>
            <div className="comm_element">
              <div className="comm_item">Parity</div>
              <select id="parity" className="comm_input">
                <option value="none">None</option>
                <option value="odd">Odd</option>
                <option value="even">Even</option>
                <option value="space">Space</option>
                <option value="mark">Mark</option>
              </select>
            </div>
            <div className="comm_element">
              <div className="comm_item">StopBit</div>
              <select id="stopbit" className="comm_input">
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}
