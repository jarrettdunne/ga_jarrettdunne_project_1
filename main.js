/* 
============================================================================
  API parameter data & misc functions & global variable declarations
============================================================================
*/

const labels = {
  "diet": [
    {
      "label": "Balanced",
      "parameter": "balanced",
      "definition": "Protein/Fat/Carb values in 15/35/50 ratio"
    },
    {
      "label": "High-Fiber",
      "parameter": "high-fiber",
      "definition": "More than 5g fiber per serving"
    },
    {
      "label": "High-Protein",
      "parameter": "high-protein",
      "definition": "More than 50% of total calories from proteins"
    },
    {
      "label": "Low-Carb",
      "parameter": "low-carb",
      "definition": "Less than 20% of total calories from carbs"
    },
    {
      "label": "Low-Fat",
      "parameter": "low-fat",
      "definition": "Less than 15% of total calories from fat"
    },
    {
      "label": "Low-Sodium",
      "parameter": "low-sodium",
      "definition": "Less than 140mg Na per serving"
    }
    ],
  "health": [
    {
      "label": "Alcohol free",
      "parameter": "alcohol-free",
      "definition": "No alcohol used or contained"
    },
    {
      "label": "Immuno-Supportive",
      "parameter": "immuno-supportive",
      "definition": "Recipes which fit a science-based approach to eating to strengthen the immune system"
    },
    {
      "label": "Celery free",
      "parameter": "celery-free",
      "definition": "Does not contain celery or derivatives"
    },
    {
      "label": "Crustcean free",
      "parameter": "crustcean-free",
      "definition": "Does not contain crustaceans (shrimp, lobster etc.) or derivatives"
    },
    {
      "label": "Dairy free",
      "parameter": "dairy-free",
      "definition": "No dairy; no lactose"
    },
    {
      "label": "Eggs free",
      "parameter": "egg-free",
      "definition": "No eggs or products containing eggs"
    },
    {
      "label": "Fish",
      "parameter": "fish-free",
      "definition": "No eggs or products containing eggs"
    },
    {
      "label": "FODMAP free",
      "parameter": "fodmap-free",
      "definition": "	Does not contain FODMAP foods"
    },
    {
      "label": "Gluten free",
      "parameter": "gluten-free",
      "definition": "No ingredients containing gluten"
    },
    {
      "label": "Keto",
      "parameter": "keto-friendly",
      "definition": "Maximum 7 grams of net carbs per serving"
    },
    {
      "label": "Kidney friendly",
      "parameter": "kidney-friendly",
      "definition": "Per serving – phosphorus less than 250 mg AND potassium less than 500 mg AND sodium less than 500 mg"
    },
    {
      "label": "Kosher",
      "parameter": "kosher",
      "definition": "Contains only ingredients allowed by the kosher diet. However it does not guarantee kosher preparation of the ingredients themselves"
    },
    {
      "label": "Low potassium",
      "parameter": "low-potassium",
      "definition": "Less than 150mg per serving"
    },
    {
      "label": "Lupine free",
      "parameter": "lupine-free",
      "definition": "Does not contain lupine or derivatives"
    },
    {
      "label": "Mustard free",
      "parameter": "mustard-free",
      "definition": "Does not contain mustard or derivatives"
    },
    {
      "label": "No oil added",
      "parameter": "no-oil-added",
      "definition": "No oil added except to what is contained in the basic ingredients"
    },
    {
      "label": "No-sugar",
      "parameter": "low-sugar",
      "definition": "No simple sugars – glucose, dextrose, galactose, fructose, sucrose, lactose, maltose"
    },
    {
      "label": "Paleo",
      "parameter": "paleo",
      "definition": "Excludes what are perceived to be agricultural products; grains, legumes, dairy products, potatoes, refined salt, refined sugar, and processed oils"
    },
    {
      "label": "Peanuts",
      "parameter": "peanut-free",
      "definition": "No peanuts or products containing peanuts"
    },
    {
      "label": "Pescatarian",
      "parameter": "pescatarian",
      "definition": "Does not contain meat or meat based products, can contain dairy and fish"
    },
    {
      "label": "Pork-free",
      "parameter": "pork-free",
      "definition": "Does not contain pork or derivatives"
    },
    {
      "label": "Red meat free",
      "parameter": "red-meat-free",
      "definition": "Does not contain beef, lamb, pork, duck, goose, game, horse, and other types of red meat or products containing red meat."
    },
    {
      "label": "Sesame free",
      "parameter": "sesame-free",
      "definition": "Does not contain sesame seed or derivatives"
    },
    {
      "label": "Shellfish",
      "parameter": "shellfish-free",
      "definition": "No shellfish or shellfish derivatives"
    },
    {
      "label": "Soy",
      "parameter": "soy-free",
      "definition": "No soy or products containing soy"
    },
    {
      "label": "Sugar-conscious",
      "parameter": "sugar-conscious",
      "definition": "Less than 4g of sugar per serving"
    },
    {
      "label": "Tree Nuts",
      "parameter": "tree-nut-free",
      "definition": "No tree nuts or products containing tree nuts"
    },
    {
      "label": "Vegan",
      "parameter": "vegan",
      "definition": "No meat, poultry, fish, dairy, eggs or honey"
    },
    {
      "label": "Vegetarian",
      "parameter": "vegetarian",
      "definition": "No meat, poultry, or fish"
    },
    {
      "label": "Wheat-free",
      "parameter": "wheat-free",
      "definition": "No wheat, can have gluten though"
    }
  ]
}

const values = {
  "meal": {
    "type": "mealType",
    "parameter": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack",
      "Teatime"
    ]
  },
  "dish": {
    "type": "dishType",
    "parameter": [
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
    ]
  },
  "cuisine": {
    "type": "cuisineType",
    "parameter": [
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
}

const stopwords = {
  "measurement": []
}

function parse(str) {
  return str.trim().toLowerCase().replace(/\s/g, '-')
}

function remove(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}

function collapseNav() {
  var x = document.getElementById("nav-list-id");
  if (x.className === "nav-list") {
    x.className += " responsive";
  } else {
    x.className = "nav-list";
  }
}

const cchNodeList = document.querySelectorAll('.collapsible-content-header')
const selectionForm = document.querySelector('#selection-form')

/* 
============================================================================
  Collapsible section event handler
  Initialize schedule and shopping sections as hidden
============================================================================
*/

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

/* 
============================================================================
  Add checkbox and dropdown data to DOM
============================================================================
*/
function checkboxValues(data) {
  const diet = document.querySelector('#diet')
  Object.keys(data).forEach(i => {
    data[i].forEach(j => {
      diet.insertAdjacentHTML('beforeend', `
      <li class="selection-item">
        <input type="checkbox" name="${i}" value="${j.parameter}" class="diet-checkbox" id="diet-checkbox-${j.parameter}">
        <label for="diet-checkbox-${j.parameter}">${j.label}</label>
      </li>
      `)
    })
  })
}

function dropdownValues(values) {
  Object.keys(values).forEach(key => {
    const cuisine = document.querySelector(`#option-${key}`)
    values[key].parameter.forEach(i => {
      const opt = document.createElement('option')
      opt.textContent = i
      opt.value = values[key].type
      opt.id = `option-${key}`
      cuisine.appendChild(opt)
    })
  })
}

dropdownValues(values)
checkboxValues(labels)

/* 
============================================================================
  Asynchronous request
============================================================================
*/

async function getData(url) {
  try {
    const response = await axios.get(url)
    return response.data.hits
  } catch (err) {
    console.log(err.response)
    return err.response
  }
}

/* 
============================================================================
  Selection form event handler
============================================================================
*/

selectionForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  /* 
    Local function & variable declaration
  ==========================================================================
  */
  
  const APP_ID = '8be4e382'
  const APP_KEY = '4b5c55a4d169b0a5913dc8fbc9764f49'

  const shoppingOrderedList = document.querySelector('#shopping-list')
  const visibleSelection = document.querySelector('.collapsible-content-inner.selection')
  const visibleSchedule = document.querySelector('.collapsible-content-inner.schedule')
  const visibleShopping = document.querySelector('.collapsible-content-inner.shopping')

  const checkboxes = document.querySelectorAll('.diet-checkbox')
  const selectionURL = document.querySelector('#selection-url')
  const search = document.querySelector('#search-box')

  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

  let shoppingList = new Array()

  const BASE_URL = (input) => `https://api.edamam.com/search?q=${input}&app_id=${APP_ID}&app_key=${APP_KEY}`

  /* 
    Initialize all sections as visible
  ==========================================================================
  */

  visibleSelection.style.visibility = 'visible'
  visibleSelection.style.maxHeight = 'none'

  visibleSchedule.style.visibility = 'visible'
  visibleSchedule.style.maxHeight = 'none'

  visibleShopping.style.visibility = 'visible'
  visibleShopping.style.maxHeight = 'none'

  /*
    If no text in search box, don't add to URL
  ==========================================================================
  */
  
  if (search) {
    input = parse(search.value)
  } else {
    input = ''
  }

  let url = BASE_URL(input)

  // selectionURL.innerText = url
  // selectionURL.href = url
  // selectionURL.target = '_blank'

  /* 
    Collect checkbox selected values.
    Concatenate to URL
  ==========================================================================
  */
  document.querySelectorAll('select').forEach(i => {
    a = i.options[i.selectedIndex].textContent
    if (a) {
      url += `&${i.value}=${a}`
    }
  })

  checkboxes.forEach(i => {
    if (i.checked) {
      url += `&${i.name}=${i.value}`
    }
  })
  
  /*
    Get response data
  ==========================================================================
  */
  
  const data = await getData(url)

  /*
    If response is not an error
  ==========================================================================
  */
  
  if (!(data.status == 403) && !(data.status == 401)) {
    selectionURL.innerText = ''
    days.forEach(i => {
      const arr = data[days.indexOf(i)].recipe.ingredients
      const monday = document.querySelector(`#${i}`)
      const h3 = document.createElement('h3')
      const container = document.querySelector(`#${i}`)
      remove(container)

      h3.textContent = data[days.indexOf(i)].recipe.label
      monday.appendChild(h3)

      /*
        Response has an array of ingredients.
      ======================================================================
      */
      
      arr.forEach(i => {
        const p = document.createElement('p')
        p.textContent = i.text
        shoppingList.push(i.text)
        monday.appendChild(p)
      })
      
      /*
        API does not have recipe directions in response.
        It does provide a URL to them tough.

        This checks if the response gives a URL to the directions then
        it creates a button link under the ingredients list.
      ======================================================================
      */
      
      if (data[days.indexOf(i)].recipe.url) {
        const a = document.createElement('a')
        a.href = data[days.indexOf(i)].recipe.url
        a.innerText = 'Directions'
        a.className = 'section-button'
        a.target = '_blank'
        monday.appendChild(a)
      }
    })

    const shoppingOrderedList = document.querySelector('#shopping-list')
    
    remove(shoppingOrderedList)
    
    nlp(shoppingList).forEach(i => {
      const li = document.createElement('li')
      li.id = 'shopping-item'
      li.innerText = i
      shoppingOrderedList.appendChild(li)
    })

  } else {
    selectionURL.innerText = data.data
    selectionURL.className = 'error-message'
    selectionURL.href = ''
    selectionURL.style.textDecoration = 'none'
    remove(shoppingOrderedList)

    visibleSchedule.style.visibility = 'hidden'
    visibleSchedule.style.maxHeight = '0'
  
    visibleShopping.style.visibility = 'hidden'
    visibleShopping.style.maxHeight = '0'
  }
})

/* 
============================================================================
  Add event listener to print button to ACTIVE recipe
============================================================================
*/

const printButtonSchedule = document.querySelector('#print-schedule')

printButtonSchedule.addEventListener('click', () => {
  const HTML = document.querySelector('.recipe.active')
  const recipeWindow = window.open('', 'Print Recipe', `status=1,width=${400},height=${600}`)
  recipeWindow.document.write(HTML.innerHTML)
  recipeWindow.print()
})

/* 
============================================================================
  Add event listener to print button to shopping list
============================================================================
*/

const printButtonShopping = document.querySelector('#print-shopping')

printButtonShopping.addEventListener('click', () => {
  const HTML = document.querySelector('#shopping-list')
  const recipeWindow = window.open('', 'Print Recipe', `status=1,width=${400},height=${800}`)
  recipeWindow.document.write('<h2>Shopping List</h3>')
  recipeWindow.document.write(HTML.innerHTML)
  recipeWindow.print()
})

/* 
============================================================================
  Ingredient list parsing
============================================================================
*/

function nlp(array) {
  array.forEach(i => {
    // console.log(i.split(' '))
  })
  return array
}

/* 
============================================================================
  Carousel
  Source reference: https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9
============================================================================
*/

!(function (d) {
  let itemClassName = "recipe"
  let items = d.getElementsByClassName(itemClassName)
  let totalItems = items.length
  let slide = 0
  let moving = true

  function setInitialClasses() {
    items[totalItems - 1].classList.add("prev")
    items[0].classList.add("active")
    items[1].classList.add("next")
  }

  function setEventListeners() {
    let next = d.getElementsByClassName("recipe__button--next")[0]
    let prev = d.getElementsByClassName("recipe__button--prev")[0]

    next.addEventListener('click', moveNext)
    prev.addEventListener('click', movePrev)
  }

  function disableInteraction() {
    moving = true

    setTimeout(function () {
      moving = false
    }, 500)
  }

  function moveCarouselTo(slide) {
    if (!moving) {
      disableInteraction()

      let newPrevious = slide - 1
      let newNext = slide + 1
      let oldPrevious = slide - 2
      let oldNext = slide + 2

      if ((totalItems - 1) > 3) {
        if (newPrevious <= 0) {
          oldPrevious = (totalItems - 1)
        } else if (newNext >= (totalItems - 1)) {
          oldNext = 0
        }
      }

      if (slide === 0) {
        newPrevious = (totalItems - 1)
        oldPrevious = (totalItems - 2)
        oldNext = (slide + 1)
      } else if (slide === (totalItems - 1)) {
        newPrevious = (slide - 1)
        newNext = 0
        oldNext = 1
      }

      items[oldPrevious].className = itemClassName
      items[oldNext].className = itemClassName

      items[newPrevious].className = itemClassName + " prev"
      items[slide].className = itemClassName + " active"
      items[newNext].className = itemClassName
    } + " next"
  }

  function moveNext() {
    if (!moving) {
      if (slide == (totalItems - 1)) {
        slide = 0
      } else {
        slide++
      }
      moveCarouselTo(slide)
    }
  }

  function movePrev() {
    if (!moving) {
      if (slide === 0) {
        slide = (totalItems - 1)
      } else {
        slide--
      }
      moveCarouselTo(slide)
    }
  }

  function initCarousel() {
    setInitialClasses()
    setEventListeners()

    moving = false
  }

  initCarousel()

}(document))