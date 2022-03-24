const express = require('express')
const app = express()
const port = 3000;

app.set('view engine', "ejs")
app.get("/", (req, res) => {
    res.render("index", { text: 'world' })

})
const userRouter = require('./routes/users')
const listRouter = require('./routes/lists')
//calls the router with the default route of /users
app.use('/users', userRouter)
app.use('/lists', listRouter)
app.listen(
    port,
    () => console.log(`app running on http://localhost:${port}`)
)