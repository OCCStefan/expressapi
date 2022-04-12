// const express = require('express')
// let mysql = require('mysql');
// let con = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "expressapi"
// })
// const router = express.Router()




// console.log('db/index loaded')


// function getusers(req, id) {
//     con.query("SELECT * FROM users", function (err, result, fields) {
//         if (err) throw err;
//         console.table(result);
//         if (req.params.id < result.length) {
//             return res.send(result[req.params.id]);
//         }
//         else {
//             return res.send('ID out of range');
//         }
//     });
// }


// module.exports = usercontroller