import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addMessage, createRoom } from '../../../Actions'
import './MessagesList.css';
import { socket } from '../../../FileSocket'

export function MessagesList({ messages, currentUserId, currentRoomId, handleAddMessage, handleCreateRoom }) {
  const [value, setValue] = useState('');

  useEffect(() => {
    socket.on('receive msg', msg => handleAddMessage(msg));
    socket.on('create room', room => handleCreateRoom(room))
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    socket.emit('send msg', {
      text: value,
      userId: currentUserId,
      timestamp: new Date,
      roomId: currentRoomId
    });
    setValue('');
  }

  return (
    <div className='MessagesList'>
      <div className='MessagesList__container'>
        {messages.map (message => 
        <div className={message.userId === currentUserId ? 'MessagesList__message MessagesList__message_my' : 'MessagesList__message'}>
          <span className='MessagesList__text'>{message.text}</span>
        </div>)}
      </div>
      <form className='MessagesList__form' onSubmit={handleSubmit}>
        <textarea type='text' value={value} onChange={e => setValue(e.target.value)} className='MessagesList__textarea' placeholder='Введите ваше сообщение'/>
        <button type='submit' className='MessagesList__submit'></button>
      </form>
    </div>
  )
}

export default connect(
  ({ messages, currentUserId, currentRoomId }) => ({
    messages: messages.filter(({ roomId }) => roomId === currentRoomId),
    currentUserId,
    currentRoomId
  }),
  {
    handleAddMessage: addMessage,
    handleCreateRoom: createRoom
  }
)(MessagesList);

