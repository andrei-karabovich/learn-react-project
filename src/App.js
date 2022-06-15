import './App.css';
import Header from './components/Header';
import Settings from './components/Settings';
import Music from './components/Music';
import News from './components/News';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import ConversationsContainer from './components/Conversations';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
        <div className='app-wrapper'>
        <Header />
        <Navbar/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/messages/*' element={<ConversationsContainer/>}/>
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
