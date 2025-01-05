// src/components/RecipeCard.js
import React from 'react';

const RecipeCard = ({ recipe }) => (
  <div className="recipe-card">
    <a href={recipe.url} target="_blank" rel="noopener noreferrer">
      <img src={recipe.image} alt={recipe.label} />
      <h2>{recipe.label}</h2>
      <p>{recipe.source}</p>
    </a>
    <a href={recipe.url} target="_blank" rel="noopener noreferrer">
      Przejdź do przepisu
    </a>
  </div>
);

export default RecipeCard;
