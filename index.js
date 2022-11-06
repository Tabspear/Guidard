//SERVER ENTRY POINT
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./queries')

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended:true,
    })
)


//Routes 
//route to look for a GET request on the root / URL and return some JSON. This is for the root endpoint.
app.get('/', (request, response)=>{
    response.json({
        name: 'Abiola Badmus learning Node, Express and Postgres'
    })
})

//Listen to port 

app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
})
 
app.get('/items', db.getItems)
app.get('/items/:id', db.getItemById)
app.post('/items', db.createItem);
app.put('/items/:id', db.updateItem);
app.delete('/items/:id', db.DeleteItem);