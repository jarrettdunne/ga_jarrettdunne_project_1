# Project Overview

## Project Name

Recipe Plan

## Project Description

With the frequency with which quarentines and severe weather keep us inside, it is highly probable that people are suffering from food boredom. This app tries to remedy that with randomly selected recipes for each day of the week as well as the cumulative totals of the ingredients for a convienent shopping list. In addition, it will allow diet and health restrictions as parameters.  

## API and Data Sample

EDAMAM

Edamam provides nutrition solutions to businesses in the food, health and wellness sectors, leveraging its proprietary cloud-based, structured-data semantic technology platform. Unlike traditional competitors, we deliver value-added nutrition data in real time and at fraction of the cost, saving clients both time and money. Clients include Nestle,Samsung, Epicurious, Gannett and The New York Times.

Base url: https://api.edamam.com

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

[Full webpage wireframe](full_wireframe.png)

[Mobile wireframe](mobile_wireframe.png)

#### MVP

- Make successful API queries
- Establish the HTML outline
- Assemble selection form data
- Collect form response functionality
- Regular expression parsing of ingredients
- Attribution badge
- CSS Responsive design

#### PostMVP

- Collapsable sections
- Nuttritional Information section
- Error handling for inadequate queries


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Feb 22-23| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|Feb 23| Project Approval | Incomplete
|Feb 24| Core Application Structure (HTML, CSS, etc.) | Incomplete
|Feb 24| Pseudocode / actual code | Incomplete
|Feb 25| Initial Clickable Model  | Incomplete
|Feb 26| MVP | Incomplete
|March 1| Presentations | Incomplete

## Priority Matrix

[Priority Matrix]()

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| API Setting Up | H | 3hrs| 0hrs |
| Outlining HTML | H | 1hrs| 0hrs |
| JS Event Handling | H | 3hrs | 0hrs|
| Regular Expression | H | 3hrs | 0hrs |
| Adding/Removing Data to DOM | M | 2hrs | 0hrs |
| CSS Design | M | 3hrs | 0hrs |
| Total | H | 6hrs| 0hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
