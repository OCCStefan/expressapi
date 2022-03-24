const express = require('express')
const router = express.Router()
let result

var mysql = require('mysql');

let con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "expressapi"
})











router.get('/', (req, res) => {
    // return res.send(Object.values(lists));


})

router
    .route("/:id")
    .get((req, res) => {
        // con.connect(function (err) {
        //     if (err) throw err;
        //     console.log("Connected!");
        con.query("SELECT * FROM lists", function (err, result, fields) {
            if (err) throw err;
            console.table(result);
            if (req.params.id < result.length) {
                return res.send(result[req.params.id]);
            }
            else {
                return res.send('ID out of range');

            }

        });

    })
    .put((req, res) => {

        res.send(`get user with ID ${req.params.id} `)
    })
    .delete((req, res) => {

        res.send(`get user with ID ${req.params.id} `)
    })





//runs a function each time a route with the param :ID is called
router.param("id", (req, res, next, id) => {

    next()
})



module.exports = router