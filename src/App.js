import './App.css';
import { Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage';
import { Posts } from './pages/Posts';
import { Language } from './pages/Language';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/lang" element={<Language/>}/>
    </Routes>
  );
}

export default App;
