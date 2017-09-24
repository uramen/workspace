import * as sync from './sync'
import * as api from '../api'

export const fetchPokemons = dispatch => async params => {
  dispatch(sync.pokemonsRequest(params))

  try {
    const response = await api.fetchPokemons(params)

    if (response.status === 200) {
      dispatch(sync.pokemonsSuccess(response.data))
    }
  } catch (e) {
    dispatch(sync.pokemonsFailed(e))
  }
}
