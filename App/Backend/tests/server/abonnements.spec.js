const request = require('supertest')
const app = require('../../server/app')
const { expect } = require('chai')
const { setupTestDatabase, testDatabase } = require('../helpers/testDatabase')
const { generateConfigs } = require('../helpers/config.helper')
const { createAbonnements } = require('../helpers/abonnements.helper')
const { createUser, loginAs, getWithAuth } = require('../helpers/login.helper')

const addAbonnement = require('../../server/routes/addAbonnement')
const getAllAbonnements = require('../../server/routes/getAbonnements')
const getAbonnement = require('../../server/routes/getAbonnement')
const annulerAbonnement = require('../../server/routes/annulerAbonnement')

const credential = { username: 'john.doe@me.com', password: 'password' }

describe('abonnements', function () {
    beforeEach(async function () {
        await setupTestDatabase(testDatabase)
        await generateConfigs(testDatabase)

        await createUser(testDatabase, {
            nom: 'DOE', prenom: 'John',
            email: credential.username,
            password: credential.password
        })
        await createAbonnements(testDatabase, credential.username)
    })

    describe('GET /abonnements', function () {
        it('should get all subscriptions', async function () {
            const [loginResponse, cookies] = await loginAs(app, credential)
            expect(loginResponse.statusCode).to.eq(200)

            const [response] = await getWithAuth({ app, cookies }, '/api/abonnements')
            expect(response.statusCode).to.eq(200)
            expect(response.headers['content-type']).to.match(/json/)

            expect(response.body).to.be.an('array').and.not.be.empty
            expect(response.body[0]).to.have.all.keys([
                'id', 'id_client', 'date_debut', 'date_fin', 'vcores',
                'ram', 'os', 'disque', 'bande_passante', 'prix'
            ])
        })
    })

    describe('GET /abonnement/:id', function () {
        it('should get one specific subscription', async function () {
            const abonnementId = (await testDatabase.query("SELECT MAX(id) AS id from abonnement"))[0][0]['id']

            const [loginResponse, cookies] = await loginAs(app, credential)
            expect(loginResponse.statusCode).to.eq(200)

            const [response] = await getWithAuth({ app, cookies }, `/api/abonnement/${abonnementId}`)
            expect(response.statusCode).to.eq(200)
            expect(response.headers['content-type']).to.match(/json/)

            expect(response.body).to.be.an('object').and.not.be.empty
            expect(response.body).to.have.all.keys([
                'id', 'id_client', 'date_debut', 'date_fin', 'vcores',
                'ram', 'os', 'disque', 'bande_passante', 'prix'
            ])
        })
    })
})