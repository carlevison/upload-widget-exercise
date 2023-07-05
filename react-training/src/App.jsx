import './App.css'
import Home from './components/Home';
import Upload from './components/Upload';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>

    </>
  )
}

export default App
