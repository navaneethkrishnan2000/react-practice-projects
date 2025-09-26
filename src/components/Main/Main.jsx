import { useState } from "react";
import "./Main.css";
import IngredientsList from "../IngredientsList/IngredientsList";
import Recipe from "../Recipe/Recipe";
import { getRecipeFromMistral } from "../../ai";

// props refers to the properties being passed into a component in order for it to work correctly,
// similar to how a function receives parameters: "from above". A component receiveing props is not allowed to modify those props(i.e. they are "immuatable")

// state refers to values that are managed by the component, similar to variables declared insode a function.
// Any time you have changing values that should e saved/displayed, you'll likely be using state.

export default function Main() {
  const [recipe, setRecipe] = useState("");
  const [ingredients, setIngredients] = useState([
    "chicken",
    "all the main spices",
    "corn",
    "heavy cream",
    "pasta",
  ]);

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    // const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
    setRecipe(recipeMarkdown);
  }

  function addIngredient(formData) {
    // if used action attribute in form and pass this function we get the formData, also we don't want to reset manually after submutting the form
    // event.preventDefault(); // to prevent the page from reloading after clicking the submit button
    // const formElement = event.currentTarget;
    // const formData = new FormData(formElement) // get the input from the event
    const newIngredient = formData.get("ingredient"); // ingredient is the name of the form

    if (newIngredient) {
      // update state immutably
      setIngredients((prevIngredients) => [...prevIngredients, newIngredient]); // push the new ingredient as a callback function
      /**
       * Note: if you ever need the old value of state to help you determine the new value of state,
       * you should pass a callbacke function instead of using state directly. This callback function will
       *  receive the old state as its parameter, which you can then use to determine your new value of state.
       */
    }

    // reset the form input
    // formElement.reset();
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
      )}

      {recipe && <Recipe recipe={recipe} />}
    </main>
  );
}
