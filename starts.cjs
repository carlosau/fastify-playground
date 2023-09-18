const fastify = require('fastify')

const serverOptions = {
    logger: true
}

const app = fastify(serverOptions)

app.listen({
    port: 8080,
    host: '0.0.0.0'
}).then((address) => {
  //  Server is now listening on ${address}
})