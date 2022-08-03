const supertest = require('supertest')
require('dotenv').config()

const api = supertest('https://pokeapi.co')

const getPokemonList = () =>
	api
		.get('/api/v2/pokemon')
		.set('accept', 'application/json')
		.set('Content-Type', 'application/json')

const getPokemonDetail = (namaPokemon) =>
  api
    .get(`/api/v2/pokemon/${namaPokemon}`)
	.set('accept', 'application/json')
	.set('Content-Type', 'application/json')

module.exports = {
	getPokemonList,
  getPokemonDetail
};