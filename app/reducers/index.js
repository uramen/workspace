import { combineReducers } from 'redux'
import chat from './chat'

export const initialState = {
  loading: false,
  error: null,
  data: null
}

const app = combineReducers({
  chat
})

export default app
