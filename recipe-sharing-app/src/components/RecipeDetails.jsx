import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore(state =>
    state.recipes.find(recipe => recipe.id === recipeId)
  );
  if (!recipe) {
    return <p>Recipe not found!</p>
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm />
      <DeleteRecipeButton />
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
    </div>
  );
};

export default RecipeDetails;