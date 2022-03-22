const mysql = require('mysql');

const pool = mysql.createPool({

    user: 'root',
    password: '',
    host: 'localhost',
    database: 'expressapi',

})
let userdb = {};
userdb.all = () => {



    pool.query('select * from users', (err, results) => {

        console.log(results);
        return results;



    });
}






module.exports = userdb;
