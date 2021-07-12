const router = require("express").Router();
const db = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
// const filter = require("express").Filter();

// const load = ()=>{
//     router.get('/api/notes',(req,res)=>{
//         for(let i = 0; i < )
//     })
// }
router.get('/notes', (req, res) => {
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
    fs.writeFileSync('db/db.json', JSON.stringify(database))
    res.json(database);
    // db.push(newNote);
    console.log(newNote);
});

router.delete('/notes/:id',(req,res)=>{
    console.log('req params',req.params.id)
    let database =JSON.parse(fs.readFileSync('db/db.json'))
    let filteredNotes = database.filter(note=>note.id !== req.params.id)
    console.log(filteredNotes)
    fs.writeFileSync('db/db.json', JSON.stringify(filteredNotes))
   
res.json(filteredNotes)
});
    
    
module.exports = router