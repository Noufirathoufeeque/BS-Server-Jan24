const jsonServer = require('json-server')
const BSServer = jsonServer.create()
const middleware = jsonServer.defaults()
const route = jsonServer.router('db.json')
const PORT = 3000 || process.env.PORT





BSServer.use(middleware)
BSServer.use(route)
BSServer.listen(PORT,()=>{
    console.log(`Book store Server Started at port ${PORT} and waiting for client request`);
})