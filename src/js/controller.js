import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSE_SEC } from './config.js';

const controlRecipes = async function(){
  try{
    // Extracting 'id' from the hash.
    const id = window.location.hash.slice(1);

    if(!id) return;
    recipeView.renderSpinner();

    // 0) Update results View
    resultsView.update(model.getSearchResultsPage());
    // 1) Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);

    // 2) Loading recipe
    await model.loadRecipe(id);

    // 3) Rendering the recipe
    recipeView.render(model.state.recipe);


  } catch(err) {
    recipeView.renderError();
    console.error(err);
  }
};

const controlSearchResults = async function(){
  try{
    // Render spinner in the results section
    resultsView.renderSpinner();

    // 1) Get Search Query
    const query = searchView.getQuery();
    console.log('Search Query:- ', query);
    if(!query) return;

    // 2) Load search results
    await model.loadSearchResults(query);
    console.log('Search Query model:- ', model.state.search);

    // 3) Render results
    // resultsView.render(model.state.search.results)
    resultsView.render(model.getSearchResultsPage());

    // Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch(err) {
    console.log(err);
  }
};

const controlPagination = function(goToPage){
  // 1) Render new results
  // resultsView.render(model.state.search.results)
  resultsView.render(model.getSearchResultsPage(goToPage));

  // Render initial pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function(newServings){
  // Update the recipe servings (in the state)a
  model.updateServings(newServings);

  // Update the recipe view -> Rendering the recipe
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function(){
  // 1) Add or remove bookmark
  if(!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe.id);
  }
  
  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function(){
  bookmarksView.render(model.state.bookmarks);
}

const controlAddRecipe = async function(newRecipe){
  try {
    // Show loading spinner
    addRecipeView.renderSpinner();

    // Upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render the recipe
    recipeView.render(model.state.recipe);

    // Display the success message
    addRecipeView.renderMessage();

    // Render bookmark view
    bookmarksView.render(model.state.bookmarks);

    // Change id in the url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Close form window
    setTimeout(function(){
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);

  } catch (err) {
    addRecipeView.renderError(err.message);
  }
}

const init = function(){
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();