const express = require('express')
const router = express.Router()




router.get('/', (req, res) => {



})

router
    .route("/:id")
    .get((req, res) => {
        console.log(req.user)
        res.status(200).send(

            {
                "user": req.params.id


            },

            // `get user with ID ${req.params.id} `
        )
    })
    .put((req, res) => {

        res.send(`get user with ID ${req.params.id} `)
    })
    .delete((req, res) => {

        res.send(`get user with ID ${req.params.id} `)
    })


const users = [{ name: "test1" }, { name: "test2" }]

//runs a function each time a route with the param :ID is called
router.param("id", (req, res, next, id) => {
    req.users = users[id]

    next()
})



module.exports = router