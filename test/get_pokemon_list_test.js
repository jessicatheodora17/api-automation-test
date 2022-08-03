const chai = require('chai')
const assert = require('chai').expect
chai.use(require('chai-json-schema'))

const pagePoke = require('../page/pokemon_page')
const schema = require('../data/get_list_pokemon_schema.json')

const testCase={
	describe: 'Pokemon List',
	positive: {
		listPokemon : 'As a User, I want to be able to see pokemon list'
	},

}

describe(`@tesPoke ${testCase.describe}`, () => {
	it(`@tesPoke  ${testCase.positive.listPokemon}`, async () => {
		const response = await pagePoke.getPokemonList()
		assert(response.status).to.equal(200, 'success')
		assert(response.body.count).to.equal(1154)
		assert(response.body.results[0].name).to.equal('bulbasaur')
		assert(response.body).to.jsonSchema(schema)
	})
})