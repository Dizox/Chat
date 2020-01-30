import React, { useState } from 'react';
import { connect } from 'react-redux';
import './TopNav.css';
import { openUserList } from '../../../Actions';
import { copyToClipboard } from '../../../utils/utils';

function TopNav({ usersListIsOpen, handleOpenUsersList, currentRoomId }) {

  function handleClickUsersList(e) {
    handleOpenUsersList(!usersListIsOpen);
  }

  function handleClickCopyLink(e) {
    const address = `${window.location.origin}/invite?room=${currentRoomId}`;
    copyToClipboard(address);
    // localhost/invite?room=id
  }
  
  return (
    <div className='TopNav'>
      <button className='TopNav__copyLink' onClick={handleClickCopyLink}>Скопировать ссылку на комнату</button>
      <button className='TopNav__usersList' onClick={handleClickUsersList}/>
    </div>
  )
}


export default connect(
  ({ usersListIsOpen, currentRoomId }) => ({ usersListIsOpen, currentRoomId }),
  { handleOpenUsersList: openUserList }
)(TopNav);