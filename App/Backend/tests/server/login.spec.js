const request = require('supertest')
const app = require('../../server/app')
const { expect } = require('chai')
const { setupTestDatabase, testDatabase } = require('../helpers/testDatabase')
const { createUser, loginAs } = require('../helpers/login.helper')

beforeEach(async function () {
    await setupTestDatabase(testDatabase)
})

describe('Login', function () {
    beforeEach(async function () {
        await createUser(testDatabase, {
            nom: 'DOE', prenom: 'John',
            email: 'john.doe@me.com',
            password: 'password'
        })
    })

    it('should success if credential is valid', async function () {
        const user = { username: 'john.doe@me.com', password: 'password' }
        const response = await loginAs(app, user)

        expect(response.status).to.equal(200)
        expect(response.headers['content-type']).to.match(/json/)
        expect(response.body).to.deep.equal({ message: 'ok' })
    })

    it('should fail if credential is invalid', async function () {
        const user = { username: 'john.doe@me.com', password: 'badPassword' }
        const response = await loginAs(app, user)

        expect(response.status).to.equal(400)
        expect(response.headers['content-type']).to.match(/json/)
        expect(response.body).to.deep.equal({ })
    })

    it('should fail if user does not exist', async function () {
        const user = { username: 'marie.dupont@moi.fr', password: 'mot_de_passe' }
        const response = await loginAs(app, user)

        expect(response.status).to.equal(400)
        expect(response.headers['content-type']).to.match(/json/)
        expect(response.body).to.deep.equal({ })
    })
})