import './App.css';
import Header from './components/Header';
import Settings from './components/Settings';
import Music from './components/Music';
import News from './components/News';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Users from './components/Users';
import Conversations from './components/Conversations';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { initialize } from './redux/appReducer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import React, { useEffect } from 'react';
import Spinner from './components/common/Spinner/Spinner';


const mapStateToProps = (state) => {
  return {
    isInitialized: state.app.isInitialized
  }
};

const App = (props) => {

  useEffect(() => {   
    props.initialize();
  }, []);

  if (!props.isInitialized) {
    return <Spinner/>
  }
  return (<BrowserRouter>
    <div className='app-wrapper-container'>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/messages/*' element={<Conversations />} />
            <Route path='/profile'>
              <Route index element={<Profile />} />
              <Route path=':userId' element={<Profile />} />
            </Route>
            <Route path='/settings' element={<Settings />} />
            <Route path='/music' element={<Music />} />
            <Route path='/news' element={<News />} />
            <Route path='/users' element={<Users />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default compose(connect(mapStateToProps, { initialize }))(App);