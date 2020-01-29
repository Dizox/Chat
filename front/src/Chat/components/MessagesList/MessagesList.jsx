import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addMessage, createRoom } from '../../../Actions'
import { socket } from '../../../FileSocket'
import TopNav from '../TopNav/TopNav'
import UsersList from '../UsersList/UsersList'
import './MessagesList.css';

export function MessagesList({ users, messages, currentUserId, currentRoomId, handleAddMessage, handleCreateRoom, usersListIsOpen }) {
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
      timestamp: parseInt(new Date().getTime()),
      roomId: currentRoomId
    });
    setValue('');
  }

  const TakeAuthorName = (props) => {
    const message = props.message;
    const messageAuthor = users.find(({id}) => message.userId === id);

    //fix that after added SQL

    if (messageAuthor === undefined) {
      return 'Другой человек';
    }

    return messageAuthor.id === currentUserId ? '' : messageAuthor.name;
  }

  const MessagesListMainStyle = {
    width: usersListIsOpen ? '50%' : '100%'
  };

  return (
    <div className='MessagesList'>
      <div className='MessagesList__main' style={MessagesListMainStyle}>
        <TopNav />
        <div className='MessagesList__container'>
          {messages.map (message => 
          <div className={message.userId === currentUserId ? 'MessagesList__message MessagesList__message_my' : 'MessagesList__message'}>
            <span className='MessagesList__date'>{new Date(message.timestamp).toLocaleString()}</span>
            <span className='MessagesList__name'>
              <TakeAuthorName message={message} />
            </span>
            <span className='MessagesList__text'>{message.text}</span>
          </div>)}
        </div>
        <form className='MessagesList__form' onSubmit={handleSubmit}>
          <textarea type='text' value={value} onChange={e => setValue(e.target.value)} className='MessagesList__textarea' placeholder='Введите ваше сообщение'/>
          <button type='submit' className='MessagesList__submit'></button>
        </form>
      </div>     
      <UsersList />
    </div>
  )
}

export default connect(
  ({ users, messages, currentUserId, currentRoomId, usersListIsOpen }) => ({
    users,
    messages: messages.filter(({ roomId }) => roomId === currentRoomId),
    currentUserId,
    currentRoomId,
    usersListIsOpen
  }),
  {
    handleAddMessage: addMessage,
    handleCreateRoom: createRoom
  }
)(MessagesList);

