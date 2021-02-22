# Project Overview

## Project Name

Recipe Plan

## Project Description

With the frequency with which quarentines and severe weather keep us inside, it is highly probable that people are suffering from food boredom. This app tries to remedy that with randomly selected recipes for each day of the week as well as the cumulative totals of the ingredients for a convienent shopping list. In addition, it will allow diet and health restrictions as parameters.  

## API and Data Sample

Specify the API you are using and include a link. Show us a snippet of JSON returned by your API so we know you can access it and get the info you need

EDAMAM

Edamam provides nutrition solutions to businesses in the food, health and wellness sectors, leveraging its proprietary cloud-based, structured-data semantic technology platform. Unlike traditional competitors, we deliver value-added nutrition data in real time and at fraction of the cost, saving clients both time and money. Clients include Nestle,Samsung, Epicurious, Gannett and The New York Times.

Base url: https://api.edamam.com

Recipe Search API: https://developer.edamam.com/edamam-docs-recipe-api

```
{
q: "chickem",
from: 0,
to: 10,
more: false,
count: 1,
hits: [
{
recipe: {
uri: "http://www.edamam.com/ontologies/edamam.owl#recipe_0644cc4e59dd72849e149fdf9bbbbafc",
label: "Onion Casserole",
image: "https://www.edamam.com/web-img/5b7/5b7c255a664d656a73d87ef99e149b1b.jpg",
source: "Foodista",
url: "http://www.foodista.com/recipe/TPHTHNK8/onion-casserole",
shareAs: "http://www.edamam.com/recipe/onion-casserole-0644cc4e59dd72849e149fdf9bbbbafc/chickem",
yield: 6,
dietLabels: [
"Low-Carb"
],
healthLabels: [
"Vegetarian",
"Peanut-Free",
"Tree-Nut-Free",
"Alcohol-Free"
],
cautions: [
"Sulfites"
],
ingredientLines: [
"4 mediums Onions, sliced",
"3 tablespoons Butter or margarine",
"1 can Sliced mushrooms, drained (2 1/2 oz.)",
"1 teaspoon Paprika",
"1 1/2 cups Plain croutons",
"1/2 cup Shredded carraway seed cheese",
"1/2 cup Shredded mild cheddar cheese",
"3 tablespoons Grated parmesan cheese",
"1 can Cream of chickem soup, (10 3/4 oz.)"
],
```

## Wireframes

Upload images of your wireframes to an image hosting site or add them to an assets folder in your repo and link them here with a description of each specific wireframe.

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

- Attribution badge
- Error handling

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Find and use external api 
- Render data on page 
- Allow user to choose favorites 

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*

- Add second API
- Use local storage to save user favorites

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

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

Include a full list of features that have been prioritized based on the `Time and Importance` Matrix.  Link this image in a similar manner to your wireframes

## Timeframes

Tell us how long you anticipate spending on each area of development. Be sure to consider how many hours a day you plan to be coding and how many days you have available until presentation day.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Throughout your project, keep track of your Time Invested and Actual Time and update your README regularly.

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3hrs| 3.5hrs | 3.5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Total | H | 6hrs| 5hrs | 5hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
