import { db } from '../../firebase';
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
  query,
  orderBy,
} from 'firebase/firestore';

// Actions
const LOAD = 'wordBooks/LOAD';
const CREATE = 'wordBooks/CREATE';
const UPDATE = 'wordBooks/UPDATE';
const REMOVE = 'wordBooks/REMOVE';

//initial State
const initialState = {
  is_loaded: false,
  list: [],
};

// Action Creators
export function loadWordBook(wordBook_list) {
  return { type: LOAD, wordBook_list };
}

export function createWordBook(wordBook) {
  return { type: CREATE, wordBook };
}

export function updateWordBook(wordBooks) {
  return { type: UPDATE, wordBooks };
}

export function removeWordBook(index) {
  return { type: REMOVE, index };
}

//middleware
export const loadWordBookFB = () => {
  return async function (dispatch) {
    const wordBook_data = await getDocs(
      query(collection(db, 'wordBook'), orderBy('time'))
    );
    let wordBook_list = [];

    wordBook_data.forEach((doc) => {
      wordBook_list.push({ ...doc.data(), id: doc.id });
    });
    dispatch(loadWordBook(wordBook_list));
  };
};

export const addWordBookFB = (wordBook) => {
  return async function (dispatch) {
    const time = serverTimestamp();
    wordBook = { ...wordBook, time: time };
    const docRef = await addDoc(collection(db, 'wordBook'), wordBook);
    const wordBook_data = { ...wordBook, id: docRef.id };
    dispatch(createWordBook(wordBook_data));
  };
};

export const updateWordBookFB = (wordBooks, wordBook) => {
  return async function (dispatch) {
    const time = serverTimestamp();
    wordBook = { ...wordBook, time: time };
    const docRef = doc(db, 'wordBook', wordBook.id);
    updateDoc(docRef, wordBook);
    dispatch(updateWordBook(wordBooks));
  };
};
export const removeWordBookFB = (id, index) => {
  return async function (dispatch) {
    const docRef = doc(db, 'wordBook', id);
    deleteDoc(docRef);
    dispatch(removeWordBook(index));
  };
};
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case LOAD: {
      return { list: action.wordBook_list, is_loaded: true };
    }
    case CREATE: {
      const new_wordBook_list = [...state.list, action.wordBook];
      return { ...state, list: new_wordBook_list };
    }
    case UPDATE: {
      const new_wordBook_list = action.wordBooks;
      return { ...state, list: new_wordBook_list };
    }
    case REMOVE: {
      const index = action.index;
      const new_wordBook_list = state.list.filter((item, i) => i !== index);
      return { ...state, list: new_wordBook_list };
    }
    default:
      return state;
  }
}
