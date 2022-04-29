import './App.css';
import { Route, Routes } from 'react-router';
import { HomePage } from './pages/HomePage';
import { Posts } from './pages/Posts';
import { Language } from './pages/Language';
import { ApplicationForm } from './pages/ApplicationForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/lang" element={<Language/>}/>
      <Route path="/application" element={<ApplicationForm/>}/>
    </Routes>
  );
}

export default App;
