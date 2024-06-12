// src/api.js
export const fetchRecipes = async (query) => {
  console.log(`Pobieranie przepisów dla zapytania: ${query}`);
  console.log(`Używając App ID: ${process.env.REACT_APP_EDAMAM_APP_ID}`);
  console.log(`Używając API Key: ${process.env.REACT_APP_EDAMAM_API_KEY}`);

  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_API_KEY}`
  );

  console.log(`Response status: ${response.status}`);
  if (!response.ok) {
    throw new Error('Błąd sieci');
  }
  
  const data = await response.json();
  console.log(`Pobrane dane:`, data);

  return data.hits.map(hit => hit.recipe);
};
