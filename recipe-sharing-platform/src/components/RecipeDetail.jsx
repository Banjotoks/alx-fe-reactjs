import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react-router-dom';
import recipesData from '../data.json'

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const recipeData = recipesData.find((recipe) => recipe.id === parseInt(id));
        setRecipe(recipeData);
    }, [id]);

    if(!recipe) {
        return <div className='text-center text-lg'>Loading...</div>;
    }

    return (
        <div className='containermx-auto p-4'>
            <h1 className='text-4xl font-bold text-center mb-6 text-gray-800'>{recipe.title}</h1>
            <div className='mb-8'>
                <img
                src={recipe.image}
                alt={recipe.title}
                className='w-full h-64 md:96 object-cover rounded-lg shadow-lg'              
                /> 
                <p className="text-xl text-gray-600 mb-8 text-center">{recipe.summary}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ingredients</h2>
          <ul className="list-disc list-inside">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-lg text-gray-700">{ingredient}</li>
            ))}
          </ul>
        </div>  

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Instructions</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{recipe.instructions}</p>
        </div>

                </div>
            </div>

        </div>

    );
};






export default RecipeDetail