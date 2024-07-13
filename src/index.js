const express = require('express')
const path = require('path')
const PORT = 3000
const expressLayouts = require('express-ejs-layouts')

const app = express()

// Set static folder
app.use(express.static('public'));

// Configurar el motor de plantillas EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '..', 'views'))

app.get('/', (req,res) => {
    const data = {'message':'hello world'}
    const context = { layout: 'layouts/horizontal', data };

    res.render('pages/index', context)
})


app.listen(PORT, ()=> console.log(`Listening on http://localhost:${PORT}`))
