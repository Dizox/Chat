import React, { useState } from 'react';
import { connect } from 'react-redux';
import './TopNav.css';

export default function TopNav() {

  return (
    <div className='TopNav'>
      <button className='TopNav__copyLink'>Скопировать ссылку на комнату</button>
      <button className='TopNav__usersList' />
    </div>
  )
}


