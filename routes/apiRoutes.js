const router = require("express").Router();
const db = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
// const load = ()=>{
//     router.get('/api/notes',(req,res)=>{
//         for(let i = 0; i < )
//     })
// }
router.get('/notes', (req,res)=>{
let database = fs.readFileSync('db/db.json');
database = JSON.parse(database);
res.json(database);
});
router.post('/notes', (req, res) => {
    let database = fs.readFileSync('db/db.json')
    database = JSON.parse(database);
    const newNote = {
        ...req.body, id: uuidv4()
    }
    database.push(newNote);

    fs.writeFileSync('db/db.json',JSON.stringify(database))
    res.json(database);

    // db.push(newNote);
    console.log(newNote);


});


module.exports = router