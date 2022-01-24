import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

const Hi = () => {
  return <div>hihi</div>;
};

export default function Example() {
  return (
    <Routes>
      <Route path="/" element={<Hi />} />
    </Routes>
  );
}
