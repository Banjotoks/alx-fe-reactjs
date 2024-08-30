import useRecipeStore from './recipeStore';
import EditRecipeForm from './EditRecipeForm'
import DeleteRecipeButton from './DeleteRecipeButton';
import useRecipeStore from './store/recipeStore';

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
      
    </div>
  );
};

export default RecipeDetails;