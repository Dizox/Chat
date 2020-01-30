import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { createRoom, setRoom } from '../../../Actions'

function Invite({ location, history, handleCreateRoom, handleSetRoom, rooms }) {
  async function onMount() {
    const searchParams = new URLSearchParams(location.search.slice(1));
    const roomId = searchParams.get("room");

    const roomCheck = rooms.find(( {id} ) => id === roomId);
    console.log(roomCheck);

    if(roomCheck) {
      handleSetRoom(roomId);
      history.push('/');
      return;
    }
    
    const response = await fetch(`http://localhost:3636/room?id=${roomId}`);
    if (response.status === 200) {
      const room = await response.json();
      handleCreateRoom(room);
      history.push('/');
    } else {
      console.log('err');
    }
  }
  useEffect(() => {
    onMount();
  }, []);

  return 123; 
}

export default connect (
  ({ rooms }) => ({ rooms }),
  { 
    handleCreateRoom: createRoom,
    handleSetRoom: setRoom
  }
)(Invite);