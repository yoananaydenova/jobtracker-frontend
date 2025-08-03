import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import JobList from './components/JobList';
import { Container } from '@mui/material';

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<JobList />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App
