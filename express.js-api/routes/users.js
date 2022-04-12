const express = require('express')
const router = express.Router()
const bodyParser = require("body-parser");
const app = express()


let users = [{
    id: "1",
    name: "test1"
},
{
    id: "2",
    name: "test2"
}]
var mysql = require('mysql');

let con = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "expressapi"
})

router.get('/', (req, res) => {


    // return res.send(Object.values(users));


})

router
    .route("/:id")
    .get((req, res) => {
        con.query("SELECT * FROM users", function (err, result, fields) {
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
router.post('/', async (req, res) => {
    const { name } = req.body
    con.query(`INSERT INTO users (User_id, name) VALUES (NULL, '${name}');`, function (err, result, fields) {
        res.send(`created user with the name of ${name}`)

    });



    //     res.send('response' + subscriber.name)
    // } catch (err) {
    //     res.send('error')
    // }
})
    .delete((req, res) => {
        res.send(`get user with ID ${req.params.id} `)
    })
//runs a function each time a route with the param :ID is called
// router.param("id", (req, res, next, id) => {

//     console.table(users)
//     next()
// })
module.exports = router