import './App.css';
import Header from './components/Header';
import Settings from './components/Settings';
import Music from './components/Music';
import News from './components/News';
import Navbar from './components/Navbar';
import Conversations from './components/Conversations';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { initialize } from './redux/appReducer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import React, { useEffect, Suspense, lazy, useLayoutEffect } from 'react';
import Spinner from './components/common/Spinner/Spinner';

const Users = lazy(() => import('./components/Users'));
const Profile = lazy(() => import('./components/Profile'));

const mapStateToProps = (state) => {
  return {
    isInitialized: state.app.isInitialized
  }
};

const App = (props) => {

  const showErrorAlert = (event) => {
    alert(`UNHANDLED PROMISE REJECTION: ${event.reason}`);
  }

  useEffect(() => {   
    window.addEventListener("unhandledrejection", showErrorAlert);
    props.initialize();
  }, []);

  useLayoutEffect(() => {
    return () => {
      window.removeEventListener("unhandledrejection", showErrorAlert);
    }
}, [])

  if (!props.isInitialized) {
    return <Spinner/>
  }

  return (<BrowserRouter basename={process.env.PUBLIC_URL}>
    <Suspense fallback={<div><Spinner /></div>}>
    <div className='app-wrapper-container'>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/" element={<Navigate to="/profile" />} />
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
    </Suspense>
  </BrowserRouter>
  );
}

export default compose(connect(mapStateToProps, { initialize }))(App);