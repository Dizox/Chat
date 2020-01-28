import React, { useState } from 'react';
import { connect } from 'react-redux';
import './LoginForm.css';
import { login } from '../../../Actions';
import { socket } from '../../../FileSocket'
const uuidv4 = require('uuid/v4');

function LoginForm({ handleLogin }) {

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name: e.target.userName.value,
      id: uuidv4()
    }
    handleLogin(user);
    socket.emit('first connect')
  }

  return (
    <form className='LoginForm' onSubmit={handleSubmit}>
      <div className='LoginForm__title'>Ваше имя: <span className='LoginForm__star'>*</span></div>
      <input className='LoginForm__input' name='userName' type='text' placeholder='Введите ваше имя'/>
      <button type='submit' className='LoginForm__submit'>Авторизоваться</button>
    </form>
  )
}


// const mapDispatchProps = (dispatch) => ({
//   handleLogin: (user) => dispatch(login(user))
// });

export default connect(null, {
  handleLogin: login
})(LoginForm);
