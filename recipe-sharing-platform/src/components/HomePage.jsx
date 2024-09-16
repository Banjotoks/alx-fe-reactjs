import { useState, useEffect } from "react";
import recipesData from "../data.json";

const HomePage = () => {
    const[recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(recipesData);  
    }, []);


    return (
        <div className="container mx-auto p-4">
            <h1 class="text-4xl font-bold text-center mb-8">Recipe-Sharing-Platform</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recipes.map(recipe => (
                    <div key={recipe.id} className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-105 tensition-transform duration-300 p-4">
                        <img
                        src={recipe.image}
                        alt={recipe.title}
                        className="w-full h-32 object-cover mb-2 rounded-md"
                        />
                        <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                        <p className="text-gray-700">{recipe.summary}</p>
                        </div>

                    </div> 
                ))}
            </div>
        </div>
        

      );
    

};

export default HomePage;

