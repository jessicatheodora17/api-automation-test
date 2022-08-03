const chai = require('chai')
const assert = require('chai').expect
chai.use(require('chai-json-schema'))

const pagePoke = require('../page/pokemon_page')
const data = require('../data/get_pokemon_detail_data.json')

const testCase={
	describe: 'Pokemon Detail',
	positive: {
		pokemonDetail : 'As a User, I want to be able to see pokemon detail'
	},
	negative: {
		nonexistPokemon : 'As a User, I won\'t be able to see pokemon detail if I input nonexist pokemon name'
	}
}

describe(`@tesPoke ${testCase.describe}`, () => {
	describe('@tesPoke Positive Case', () => {
		it(`@tesPoke  ${testCase.positive.pokemonDetail}`, async () => {
			const response = await pagePoke.getPokemonDetail(data.validPokemon)
			assert(response.status).to.equal(200, 'success')
		})
	})
	describe('@tesPoke Negative Case', () => {
		it(`@tesPoke  ${testCase.negative.nonexistPokemon}`, async () => {
			const response = await pagePoke.getPokemonDetail(data.nonexistPokemon)
			assert(response.status).to.equal(404, 'not found')
		})
	})
})