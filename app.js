// app.js

const auth = require('./auth.json')
const APP_ID = auth.id
const APP_KEY = auth.key

const search = 'chickem'

const url = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&`

console.log(url)