import { useState, useEffect } from "react";
import recipesData from "../data.json";

const HomePage = () => {
    const[recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(recipesData);
    }, []);


    return (
        <div className="mt-3 flex -space-x-2 overflow-hidden" >
            <h1 class="font-semibold text-slate-900">Recipe-Sharing-Platform</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {recipes.map(recipe => (
                    <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4">
                        <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-32 object-cover mb-2 rounded-md"
                        />
                        <h2 className="text-xl font-semibold">{recipe.title}</h2>
                        <p className="text-gray-600">{recipe.summary}</p>

                    </div>
                ))}
            </div>
        </div>
        

      );
    

};
  

export default HomePage; 

