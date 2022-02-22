import Console from 'lib/console';
import React, { useEffect, useState } from 'react';
import '../scss/CommSetting.scss';

const CommSetting = () => {
  const [list, setList] = useState<string[]>(['']);

  useEffect(() => {
    window.electron.ipcRenderer.send('loading');
    window.electron.ipcRenderer.receive('loading_data', (data: any) => {
      data.sort(function bar(a: any, b: any) {
        return Number(a.match(/(\d+)/g)[0]) - Number(b.match(/(\d+)/g)[0]);
      });
      Console.log(data);
      setList(data);
    });
  }, []);

  const onChangeComport = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    Console.log(e.target.value);
    window.electron.ipcRenderer.send('comport', e.target.value);
  };

  const onChangeBaudRate = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    Console.log(e.target.value);
    window.electron.ipcRenderer.send('baudrate', e.target.value);
  };

  const onChangeDataBits = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    Console.log(e.target.value);
    window.electron.ipcRenderer.send('databits', e.target.value);
  };

  const onChangeParityBits = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    Console.log(e.target.value);
    window.electron.ipcRenderer.send('parity', e.target.value);
  };

  const onChangeStopBits = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    Console.log(e.target.value);
    window.electron.ipcRenderer.send('stopbits', e.target.value);
  };

  return (
    <div className="comm_setting">
      <div className="comm_title">Comm Setting</div>
      <fieldset className="comm_setting_border">
        <div className="comm_elements">
          <div className="comm_element">
            <div className="comm_item">ComPort</div>
            <select
              id="comport"
              onChange={onChangeComport}
              className="comm_input"
            >
              <option>Select Port!!!</option>
              {list.map((port) => {
                return <option key={port.toString()}>{port}</option>;
              })}
            </select>
          </div>
          <div className="comm_element">
            <div className="comm_item">BaudRate</div>
            <select
              id="baudrate"
              onChange={onChangeBaudRate}
              className="comm_input"
            >
              <option value="9600">9600</option>
              <option value="19200">19200</option>
              <option value="38400">38400</option>
              <option value="57600">57600</option>
              <option value="115200">115200</option>
              <option value="230400">230400</option>
              <option value="460800">460800</option>
              <option value="921600">921600</option>
            </select>
          </div>
          <div className="comm_element">
            <div className="comm_item">DataBtis</div>
            <select
              id="databits"
              onChange={onChangeDataBits}
              className="comm_input"
            >
              <option value="8">8</option>
              <option value="7">7</option>
            </select>
          </div>
          <div className="comm_element">
            <div className="comm_item">Parity</div>
            <select
              id="parity"
              onChange={onChangeParityBits}
              className="comm_input"
            >
              <option value="none">None</option>
              <option value="odd">Odd</option>
              <option value="even">Even</option>
              <option value="space">Space</option>
              <option value="mark">Mark</option>
            </select>
          </div>
          <div className="comm_element">
            <div className="comm_item">StopBit</div>
            <select
              id="stopbit"
              onChange={onChangeStopBits}
              className="comm_input"
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="comm_element">
            <div className="comm_item">Delay (ms)</div>
            <input id="delay" className="comm_input" defaultValue="0" />
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default CommSetting;
