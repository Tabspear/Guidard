//Creates a pool of connections so we do not have to open and close the client each time we make a query

const Pool = require('pg').Pool;
const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    database: 'guidard',
    password: 'tabspear',
    port: 5432,
});

//Creating Routes for Crud operations 
/* 
GET: / | displayHome()
GET: /users | getUsers()
GET: /users/:id | getUserById()
POST: /users | createUser()
PUT: /users/:id | updateUser()
DELETE: /users/:id | deleteUser()
*/

//Get all items 

const getItems = (request, response )=>{
    pool.query('SELECT * FROM Items', (error, results)=>{
        if(error){
            throw error;
        }

        response.status(200).json(results.rows)
    });
};

//Get a single item by ID
const getItemById = (request, response)=>{
    const id = request.params.id;
    pool.query('SELECT * FROM Items WHERE id = $1', [id], (error, results) =>{
        if(error){
            throw error;
        }
       response.status(200).json(results.rows)
    })
}
//Post a single item by name
const getItemByName = (request, response)=>{
  
    const searchQuery = request.params.name;
    pool.query("SELECT * FROM Items WHERE NAME  LIKE '%' || $1 || '%'", [searchQuery], (error, results) =>{
        if(error){
            throw error;
        }
        response.status(200).json(results.rows)
    })
}

//Post a new item  by extracting the fieldnames from the request body, and Insert values with insert;
const createItem =(request, response)=>{
    const {name, type, location} = request.body;
    pool.query('INSERT INTO Items (name, type, location) VALUES($1, $2, $3) RETURNING *', [name, type, location], (error, results)=>{
        if(error){
            throw error;
        }
        response.status(201).send(`USER ADDED with ID: ${results.rows[0].id}`)
    })
};

//Update Item
const updateItem = (request, response)=>{
    const id = request.params.id;
    const {name, type, location} = request.body;
    pool.query('UPDATE Items SET NAME = $1, TYPE = $2, LOCATION = $3 WHERE id = $4', [name, type,location, id], (error, results)=>{
        if(error){
            throw error
        }
        console.log(results)
        response.status(200).send(`Item modified with ID: ${id}`)
    });
}

//Delete Item
const DeleteItem = (request, response) =>{
    const id = request.params.id; 
    pool.query('DELETE FROM Items WHERE id= $1', [id], (error, results)=>{
        if(error){
            throw error
        }
          console.log(results.rows)
    })
    response.status(200).send(`User deleted with ID: ${id}`)
}

module.exports = {
    getItems,
    getItemById,
    getItemByName,
    createItem,
    updateItem,
    DeleteItem
  }