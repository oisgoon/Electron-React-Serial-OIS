import '../scss/ViewPort.scss';
import LeftPanel from './LeftPanel';
import RigthPanel from './RightPanel';

const ViewPort = () => {
  return (
    <div className="view_port_template">
      <div className="view_port">
        <LeftPanel />
        <RigthPanel />
      </div>
    </div>
  );
};

export default ViewPort;
