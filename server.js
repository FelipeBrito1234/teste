import {fastify} from 'fastify'
import { DatabaseMemory } from './database-memory.js'

const server = fastify()

const database = new DatabaseMemory()

server.post('/moto', (request, reply) => {
   const {marca, cor, placa } = request.body
    database.create({
        marca: marca,
        cor: cor,
        placa: placa
    })
    console.log(database.list())
    return reply.status(201).send()
})

server.get('/moto', (request) => {
    const search = request.query.search

    console.log(search)
    
    const motos = database.list(search)
   
    return motos
})

server.put('/motos/:id', (request, reply) => {

    const motoId = request.params.id
    const {marca, cor , placa} = request.body
    const moto = database.update(motoId, {
        marca,
        cor,
        placa,
    })
    return reply.status(204).send()
})

server.delete('/moto/:id', (request, reply) => {
    const livroId = request.params.id

    database.delete(motoId)

    return reply.status(204).send()
})

server.listen({
    port: 3333,
})
