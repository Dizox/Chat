import React, { useState } from 'react';
import { connect } from 'react-redux';
import './UsersList.css';
import { openUserList } from '../../../Actions';

function UsersList({ users, usersListIsOpen, room }) {
  if (!usersListIsOpen) 
    return null;

  return (
    <div className='UsersList'>
      <div className='UsersList__title'>
        <span>Список пользователей:</span>
      </div>
      
      <div className='UsersList__container'>
        <div className='UsersList__user'>       
          {/* вставить потом сюда */}
        </div>
      </div>
    </div>
  )
}

/*
{room.usersIds.map(userId => (
  <div className='UsersList__name'>{users.find( ({ id }) => id === userId).name}</div>
))}
*/

export default connect (
  ({ users, usersListIsOpen, rooms, currentRoomId}) => ({ 
    users,
    usersListIsOpen, 
    currentRoomId,
    room: rooms.find(({id}) => currentRoomId === id)
  })
)(UsersList);