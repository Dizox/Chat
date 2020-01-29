import React, { useState } from 'react';
import { connect } from 'react-redux';
import './TopNav.css';
import { openUserList } from '../../../Actions';

function TopNav({ usersListIsOpen, handleOpenUsersList }) {

  function handleClickUsersList(e) {
    handleOpenUsersList(!usersListIsOpen);
  }

  return (
    <div className='TopNav'>
      <button className='TopNav__copyLink'>Скопировать ссылку на комнату</button>
      <button className='TopNav__usersList' onClick={handleClickUsersList}/>
    </div>
  )
}

export default connect(
  ({ usersListIsOpen }) => ({ usersListIsOpen }),
  { handleOpenUsersList: openUserList }
)(TopNav);