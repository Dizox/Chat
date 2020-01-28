import React, { useState } from 'react';
import { connect } from 'react-redux';
import './RoomSelector.css';
import { setRoom } from '../../../Actions'

function RoomSelector({rooms, currentRoomId, handleSetRoom}) {
  
  function handleChange(e) {
    handleSetRoom(e.target.value);
  }

  return (
    <div className='RoomSelector'>
      {rooms.map(room => (
        <label className='RoomSelector__item'>
          <input
            type="radio"
            name="room"
            value={room.id}
            checked={room.id === currentRoomId}
            onChange={handleChange}
          />
          <div className='RoomSelector__title'>{room.name}</div>
        </label>
      ))}
    </div>
  )
}


export default connect (
  ({rooms, currentRoomId}) => ({rooms, currentRoomId}),
  { handleSetRoom: setRoom }
)(RoomSelector);