import React from 'react';
import Profile from './Profile/Profile';
import Footer from './Footer/Footer';
import './Home.css';
import Header from './Header/Header';

export default function Home() {
  return (
    <div className='home-container'>
        <Header />
        <Profile />
        <Footer />
    </div>
  )
}
