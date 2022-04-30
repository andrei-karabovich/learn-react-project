import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import News from './components/News/News';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Conversations from './components/Converations/Conversations';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/messages' element={<Conversations/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/settings' element={<Settings/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/news' element={<News/>}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
