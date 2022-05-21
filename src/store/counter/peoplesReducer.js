
const initialState = {
  peoples: [],
  posts: []
}
export const peoplesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return state
    case 'FETCH_PEOPLES':
      return state
    case 'SET_PEOPLES':
      return {...state, peoples: action.payload}
    case 'FETCH_POSTS':
      return state
    case 'SET_POSTS':
      return {...state, posts: action.payload}

    default:
      return state
  }
}