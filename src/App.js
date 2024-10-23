import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import Letter from './Components/Groups/Letter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
