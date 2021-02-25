const labels = {
  "diet": ["Balanced",
    "High-Fiber",
    "High-Protein",
    "Low-Carb",
    "Low-Fat",
    "Low-Sodium"
    ],
  "health": ["Alcohol-free",
    "Immune-Supportive",
    "Celery-free",
    "Crustcean-free",
    "Dairy",
    "Eggs",
    "Fish",
    "FODMAP free",
    "Gluten",
    "Keto",
    "Kidney friendly",
    "Kosher",
    "Low potassium",
    "Lupine-free",
    "Mustard-free",
    "No oil added",
    "No-sugar",
    "Paleo",
    "Peanuts",
    "Pescatarian",
    "Pork-free",
    "Red meat-free",
    "Sesame-free",
    "Shellfish",
    "Soy",
    "Sugar-conscious",
    "Tree Nuts",
    "Vegan",
    "Vegetarian",
    "Wheat-free"
  ]
}

const values = {
  "meal": [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Snack",
    "Teatime"
  ],
  "dish": [
    "Alcohol-cocktail",
    "Biscuits and cookies",
    "Bread",
    "Cereals",
    "Condiments and sauces",
    "Drinks",
    "Desserts",
    "Egg",
    "Main course",
    "Omelet",
    "Pancake",
    "Preps",
    "Preserve",
    "Salad",
    "Sandwiches",
    "Soup",
    "Starter"
  ],
  "cuisine": [
    "American",
    "Asian",
    "British",
    "Caribbean",
    "Central Europe",
    "Chinese",
    "Eastern Europe",
    "French",
    "Indian",
    "Italian",
    "Japanese",
    "Kosher",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "South American",
    "South East Asian"
  ]
}

const cchNodeList = document.querySelectorAll('.collapsible-content-header')

cchNodeList.forEach(i => {
  i.addEventListener('click', function () {
    
    const where = `.collapsible-content-inner.${i.classList[1]}`
    const content = document.querySelector(where)

    const isVis = getComputedStyle(content)
    if (isVis.visibility === 'visible') {
      content.style.visibility = 'hidden'
      content.style.maxHeight = '0px'
    } else {
      content.style.visibility = 'visible'
      content.style.maxHeight = 'none'
    }
  })
})


function checkboxValues(data) {
  const diet = document.querySelector('#diet')
  let count = 0
  data.diet.forEach(i => {
    count += 1
    diet.insertAdjacentHTML('beforeend', `
    <li>
      <input type="checkbox" id="diet-checkbox${count}">
      <label for="diet-checkbox${count}">${i}</label>
    </li>
    `)

  })
  count = 0
  const health = document.querySelector('#health')
  data.health.forEach(i => {
    count += 1
    health.insertAdjacentHTML('beforeend', `
    <li>
      <input type="checkbox" id="health-checkbox${count}">
      <label for="health-checkbox${count}">${i}</label>
    </li>
    `)
  })
}

function dropdownValues(values) {
  Object.keys(values).forEach(key => {
    const cuisine = document.querySelector(`#option-${key}`)
    values[key].forEach(i => {
      const opt = document.createElement('option')
      opt.textContent = i
      cuisine.appendChild(opt)
    })
  })
}

dropdownValues(values)
checkboxValues(labels)