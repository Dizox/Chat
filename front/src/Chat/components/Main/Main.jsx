import React, { useState } from 'react';
import { connect } from 'react-redux';
import LoginForm from '../LoginForm/LoginForm'
import Talk from '../Talk/Talk'
import './Main.css';

function Main({ currentUserId, users }) {
  if (currentUserId === null) {
    return <LoginForm />
  }

  const currentUser = users.find(({ id }) => id === currentUserId);
  return (
    <Talk />
  )
}

function mapStateToProps(state) {
  return {
    users: state.users,
    currentUserId: state.currentUserId
  };
}

export default connect(({ users, currentUserId }) => ({ users, currentUserId }))(Main);
