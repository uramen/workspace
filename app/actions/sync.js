import * as types from './types'

export const pokemonsRequest = params => ({
  type: types.POKEMONS_REQUEST,
  params
})

export const pokemonsFailed = error => ({
  type: types.POKEMONS_FAILED,
  error
})

export const pokemonsSuccess = data => ({
  type: types.POKEMONS_SUCCESS,
  data
})
