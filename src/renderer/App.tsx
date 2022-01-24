import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Hi from './Example';

const Hello = () => {
  return (
    <div>
      <div>Communication Test</div>
      <Hi />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
