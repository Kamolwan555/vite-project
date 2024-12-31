import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignUpPage from "./Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/SignUpPage" />} />
        <Route path="/SignUpPage" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
