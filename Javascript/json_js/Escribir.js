// me sale por que me sale 

const fs = require('fs')

// ahora creamos 

const persona = {
	"nombre" : "Luis",
	"edad" : 12
}

const datos_json = JSON.stringify(persona,null,2)

fs.writeFileSync('persona1.json', datos_json)
