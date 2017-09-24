import {initialState} from './'

const chat = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIAL':
      return {...state, data: action.payload}
    default:
      return state
  }
}

export default chat
