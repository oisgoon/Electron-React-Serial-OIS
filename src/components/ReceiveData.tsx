import React from 'react';
import '../scss/ReceiveData.scss';
import Console from '../lib/console';

interface IProps {
  data: string;
}

export default class ReceiveData extends React.PureComponent {
  constructor(props: IProps) {
    super(props);
    this.state = {
      // data: '',
    };
  }

  onReset = () => {
    Console.log('hihi');
    // this.setState({ data: '' });
  };

  render(): React.ReactNode {
    // const { data } = this.state;

    // Console.log(data);

    return (
      <div className="receive_panel">
        <div className="receive_panel_title">
          Receive Data
          <button type="button" onClick={this.onReset} className="reset_button">
            Reset
          </button>
        </div>
        <fieldset className="receive_panel_border">
          <textarea className="receive_data" />
        </fieldset>
      </div>
    );
  }
}
