import React, { useState } from 'react';
import { connect } from 'react-redux';
import RoomSelector from '../RoomSelector/RoomSelector'
import MessagesList from '../MessagesList/MessagesList'
import './Talk.css';

export default function Talk() {

  return (
    <div className='Talk'>
      <RoomSelector />
      <MessagesList />
    </div>
  )
}


