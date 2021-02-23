// app.js

const auth = {
  id: "8be4e382",
  key: "4b5c55a4d169b0a5913dc8fbc9764f49",
  plan: "developer"
}
const APP_ID = auth.id
const APP_KEY = auth.key

const search = 'bread'

const url = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=1&to=100`
console.log(url)
const getRecipe = async (url) => {
  try {
    const response = await axios.get(url)
    const hits = response.data.hits
    console.log(response)
    hits.forEach(i => console.log(i))
  } catch (err) {
    console.log(err)
  }
}

getRecipe(url)