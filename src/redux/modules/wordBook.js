// Actions
const LOAD = 'wordBooks/LOAD';
const CREATE = 'wordBooks/CREATE';
const UPDATE = 'wordBooks/UPDATE';
const REMOVE = 'wordBooks/REMOVE';

//initial State
const initialState = {
  list: [{ word: 'word', desc: 'desc', example: 'example' }],
};

// Action Creators
export function loadWordBook() {
  return { type: LOAD };
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

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case CREATE: {
      const new_wordBook_list = [...state.list, action.wordBook];
      return { list: new_wordBook_list };
    }
    case UPDATE: {
      const new_wordBook_list = action.wordBooks;
      return { list: new_wordBook_list };
    }
    case REMOVE: {
      const index = action.index;
      const new_wordBook_list = state.list.filter((item, i) => i !== index);
      console.log(new_wordBook_list);
      return { list: new_wordBook_list };
    }
    default:
      return state;
  }
}
