 import {createStore} from 'redux';
// const {createStore} = require('redux');


const localStorageStateStr = localStorage.getItem('store');
let localStorageState = null;
try {
  localStorageState = JSON.parse(localStorageStateStr);
} catch(e) {
  //
}

const initialState = {
  rooms: [{
    name: 'Room1',
    id: '1',
    usersId: [5] 
  },
  {
    name: 'Room2',
    id: '2',
    usersId: [5] 
  },
  {
    name: 'Room3',
    id: '3',
    usersId: [5] 
  }],
  messages: [
    { text: 'resretdf tfgutygu gftyu ', userId: 5, timestamp: new Date, roomId: 1 },
    { text: '2cvhcvh3523452 ', userId: 3, timestamp: new Date, roomId: 1 },
    { text: 'rdfgfdgfdgdfg ', userId: 5, timestamp: new Date, roomId: 3 },
    { text: 'rvhvchcvhch ', userId: 5, timestamp: new Date, roomId: 2 }
  ],
  users: [
    { name: 'vasya', id: 5 },
    { name: 'petya', id: 3 },
  ],
  currentUserId: null,
  currentRoomId: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case 'LOGIN': 
      return {
        ...state,
        users: [...state.users, action.payload],
        currentUserId: action.payload.id
      }

    case 'ADD_MESSAGE': 
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }

    case 'SET_ROOM': 
      return {
        ...state,
        currentRoomId: action.payload
      }

    case 'CREATE_ROOM':
      return {
        ...state,
        rooms: [
          ...state.rooms, 
          {
            ...action.payload,
            usersIds: [state.currentUserId]
          }
        ],
        currentRoomId: action.payload.id
      }

    default:
      return state;
  }
}

export const store = createStore(reducer, localStorageState || initialState);

store.subscribe(() => {
  localStorage.setItem('store', JSON.stringify(store.getState()));
});

// setTimeout(() => {
//   store.dispatch({
//     type: 'NEW_MESSAGE',
//     payload: {
//       text: 'ytfty uyguyfdt resre dtr',
//       userId: 8,
//       timestamp: new Date,
//       roomId: 1
//     }
//   });
// }, 2000);

