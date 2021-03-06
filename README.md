# Project Overview

## Project Name

Recipe Scheduler

## Deployed Project Link

[Recipe Scheduler](https://jarrettdunne.github.io/recipe_scheduler/)

## Project Description

With the frequency with which quarentines and severe weather keep us inside, it is highly probable that people are suffering from food boredom. This app tries to remedy that with randomly selected recipes for each day of the week as well as the cumulative totals of the ingredients for a convienent shopping list. In addition, it will allow diet and health restrictions as parameters.  

The intent of this project was to create a application on top of the EDAMAM Recipe Search API that would display a recipe on each day of the week as well as consoildating the ingredients from each recipe in a shopping list. Both the recipes and the shopping list would be printable. The recipes would be requested with an authorization ID and key and specified URL tags; the tags were defined in the APIs documention. 

However, the application does not work as intended due to the unresponsiveness of the API to its own parameters. Thus, some changes have been made to accomdate for the now known limited capabilities of the EDAMAM Recipe Search API.

## API and Data Sample

EDAMAM

Edamam provides nutrition solutions to businesses in the food, health and wellness sectors, leveraging its proprietary cloud-based, structured-data semantic technology platform. Unlike traditional competitors, we deliver value-added nutrition data in real time and at fraction of the cost, saving clients both time and money. Clients include Nestle,Samsung, Epicurious, Gannett and The New York Times.

Recipe Search API: https://developer.edamam.com/edamam-docs-recipe-api

The below code snippet has been trimmed to conserve space here and thus, closing brackets were added ass needed to ensure a presentable data structure.
```
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
```

## Wireframes

[Full webpage wireframe](/images/full_wireframe.png)

[Mobile wireframe](/images/mobile_wireframe.png)

#### MVP

- [x] Make successful API queries
- [x] Establish the HTML outline
- [x] Selection form data hard coded from API documentation
- [x] Recipe parameter dropdown menus
- [x] Diet and health restrictions checkboxs HTML forms
- [x] Define form data collection logic as usable inputs for an API request
- [x] Recieved JSON objects handling (i.e. data sorting & filtering)
- [x] Data displayed in schedule div HTML elements
- [x] ONE recipe per day
- [x] Collapsable sections
- [x] Printable content from scheduled recipes elements
- [x] Mobile carousel of scheduled days
- [x] Menu button links to parts of page
- [x] Attribution badge
- [x] CSS Responsive design

#### PostMVP

- [ ] MULTIPLE recipes per day
- [ ] Regular expression parsing of ingredients
- [ ] Ingredient totals calculations 
- [x] Ingredient totals data to HTML elements
- [ ] Nutritional Information section
- [ ] Error handling for inadequate queries
- [ ] Selection form data pulled from API
- [ ] Interface API request throttling

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Feb 22-23| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Feb 23| Project Approval | Incomplete
|Feb 24| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Feb 25| Pseudocode / actual code | Incomplete
|Feb 25| Initial Clickable Model  | Incomplete
|Feb 26| MVP | Incomplete
|March 1| Presentations | Incomplete

## Priority Matrix

[Priority Matrix](/images/priority_matrix.png)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| API Setting Up | H | 1hrs| 0hrs | 0hrs |
| Functionally parameterized API URLs | M | 3hrs | 0hrs | 0hrs |
| Outlining HTML | H | 3hrs| 0hrs | 0hrs |
| Parameterize Dropdown Menus | H | 2hrs | 0hrs| 0hrs |
| Parameterize Checkboxs HTML Forms | H | 2hrs | 0hrs| 0hrs |
| Form Data Collection Logic | H | 3hrs | 0hrs| 0hrs |
| Display Collected Data in DOM | H | 3hrs | 0hrs| 0hrs |
| Print to Screen Specified Elements | L | 3hrs | 0hrs| 0hrs |
| Regular Expression Handling | H | 3hrs | 0hrs | 0hrs |
| Ingredient Totals Calculations  | M | 1hrs | 0hrs| 0hrs |
| Display Shopping List Data | M | 2hrs | 0hrs | 0hrs |
| CSS Flexbox Design | M | 3hrs | 0hrs | 0hrs |
| CSS Carousel Design | M | 3hrs | 0hrs | 0hrs |
| CSS Collaspible Section Design | L | 3hrs | 0hrs | 0hrs |
| Main Menu Button Design | L | 2hrs | 0hrs | 0hrs |
|  |  |   |  |  |
| Total | H | 37hrs| 0hrs | 0hrs |

## Code Snippet

```
```

## Change Log

  (empty)
