import React,{useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';

const App = () =>{

  const APP_ID = 'f9cd1351'; 
  const APP_KEY = 'bcdc50153437d299ec8598d68f97cea9';

  useEffect( () => {
    
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    console.log(data);

  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
