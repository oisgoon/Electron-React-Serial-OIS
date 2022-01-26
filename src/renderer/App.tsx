import { Routes, Route } from 'react-router-dom';
import TitleBar from '../components/TitleBar';
import ViewPort from '../components/ViewPort';
import '../scss/App.scss';

const App = () => {
  return (
    <div className="app">
      <TitleBar />
      <ViewPort />
    </div>
  );
};

export default () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
};
