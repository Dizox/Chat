
export function login(user) {
  return {
    type: 'LOGIN',
    payload: user
  }
}

export function addMessage(message) {
  return {
    type: 'ADD_MESSAGE',
    payload: message
  }
}

export function setRoom(id) {
  return {
    type: 'SET_ROOM',
    payload: id
  }
}

export function createRoom(room) {
  return {
    type: 'CREATE_ROOM',
    payload: room
  }
}