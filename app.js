// app.js

const auth = {
  id: "8be4e382",
  key: "4b5c55a4d169b0a5913dc8fbc9764f49",
  plan: "developer"
}
const APP_ID = auth.id
const APP_KEY = auth.key

const search = 'bread'

// const url = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&from=1&to=20`
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





const object =
{
  "q": "bread",
  "from": 1,
  "to": 20,
  "more": true,
  "count": 7000,
  "hits": [
    {
      "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_cab4107f2d010d4434fbed7e438790ee",
        "label": "Rustic Italian Bread",
        "image": "https://www.edamam.com/web-img/36b/36b8a93186055c229e537439a6ff94a2.JPG",
        "source": "Food52",
        "url": "https://food52.com/recipes/14745-rustic-italian-bread",
        "shareAs": "http://www.edamam.com/recipe/rustic-italian-bread-cab4107f2d010d4434fbed7e438790ee/bread",
        "yield": 6.0,
        "dietLabels": [
          "Low-Fat"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegan",
          "Vegetarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Alcohol-Free"
        ],
        "cautions": [],
        "ingredientLines": [
          "1 and 1/2 teaspoon salt",
          "1/4 teaspoon dry bread yeast",
          "450 grams bread flour",
          "1 and 1/2 cup warm water"
        ],
        "ingredients": [
          {
            "text": "1 and 1/2 teaspoon salt",
            "weight": 9.0,
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/4 teaspoon dry bread yeast",
            "weight": 1.0,
            "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
          },
          {
            "text": "450 grams bread flour",
            "weight": 450.0,
            "image": "https://www.edamam.com/food-img/132/1328fd505cdd3b75fbb8d7b58de5427c.jpg"
          },
          {
            "text": "1 and 1/2 cup warm water",
            "weight": 355.5,
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          }
        ],
        "calories": 1627.75
      }
    }
  ]
}