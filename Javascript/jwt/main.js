const express = require('express')
const app  = express()
const path = require('path')
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.get('/',(req,res) => {
	const objeto = {
		nombre:"Luis",
		edad:30
	}
	res.json(objeto)
})

app.get('/login',(req,res) => {
	res.sendFile(path.join(__dirname,"public","index.html"))
})

app.post('/aunt',(req,res) => {
	const {name , email } = req.body
	console.log(name)
	console.log(email)
})
app.listen(3000,() => {
	console.log("Puerto en espera ...")
})
