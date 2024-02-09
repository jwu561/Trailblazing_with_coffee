import React, {Component, useState} from "react";
import RecipeChoices from './RecipeChoices';
import drinksJson from "./drinks.json"


const BaristaForm = () => {

  const [inputs, setInputs] = useState({
    'temperature': '',
    'milk': '',
    'syrup': '',
    'blended': ''
  });

  const ingredients = {
    'temperature' : ['hot', 'lukewarm', 'cold'],
    'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
    'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
    'blended': ['yes', 'turbo', 'no']
  };

  const onCheckAnswer = () => {
    if (trueRecipe.temp != inputs['temperature']){
      setCheckedTemperature('wrong');
    }
    else {
      setCheckedTemperature("correct");
    }
    
    
    if (trueRecipe.temp != inputs['syrup']){
      setCheckedSyrup('wrong');
    }
    else {
      setCheckedSyrup("correct");
    }
    
    if (trueRecipe.temp != inputs['milk']){
      setCheckedMilk('wrong');
    }
    else {
      setCheckedMilk("correct");
    }

    if (trueRecipe.temp != inputs['blended']){
      setCheckedBlended('wrong');
    }
    else {
      setCheckedBlended("correct");
    }
    
  };

  const [currentDrink, setCurrentDrink] = useState(null);
  const [trueRecipe, setTrueRecipe] = useState(null);

  const getNextDrink = () => {
    const randomIndex = Math.floor(Math.random() * drinksJson.drinks.length);
    setCurrentDrink(drinksJson.drinks[randomIndex].name);
    setTrueRecipe(drinksJson.drinks[randomIndex].ingredients);
  };

  const onNewDrink = () => {
    setInputs({
      'temperature': '',
      'milk': '',
      'syrup': '',
      'blended': ''
    });

    setCheckedTemperature('');
    setCheckedSyrup('');
    setCheckedMilk('');
    setCheckedBlended('');


    getNextDrink();
  };

  const [correct_temp, setCheckedTemperature] = useState('');
  const [correct_syrup, setCheckedSyrup] = useState('');
  const [correct_milk, setCheckedMilk] = useState('');
  const [correct_blended, setCheckedBlended] = useState('');


    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <div className="drink-container">
      <h2 className="mini-header">{currentDrink}</h2>
      
    </div>
            <form>
                <h3>Temperature</h3>
                <div className="answer-space"  id={correct_temp}>
                  {inputs["temperature"]}
                </div>
                <RecipeChoices
                  handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))}
                  label="temperature"
                  choices={ingredients["temperature"]}
                  checked={inputs["temperature"]}
                />
    
                <h3>Milk</h3>
                <div className="answer-space"  id={correct_milk}>
                  {inputs["milk"]}
                </div>
                <RecipeChoices
                  handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))}
                  label="milk"
                  choices={ingredients["milk"]}
                  checked={inputs["milk"]}
                />
    
                <h3>Syrup</h3>
                <div className="answer-space"  id={correct_syrup}>
                  {inputs["syrup"]}
                </div>
                <RecipeChoices
                  handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))}
                  label="syrup"
                  choices={ingredients["syrup"]}
                  checked={inputs["syrup"]}
                />
    
                <h3>Blended</h3>
                <div className="answer-space"  id={correct_blended}>
                  {inputs["blended"]}
                </div>
                <RecipeChoices
                  handleChange={(e) => setInputs((prevState) => ({
                    ...prevState,
                    [e.target.name]: e.target.value,
                  }))}
                  label="blended"
                  choices={ingredients["blended"]}
                  checked={inputs["blended"]}
                />
    
                <button type="submit" className="button submit" onClick={onCheckAnswer}>
                    Check Answer
                </button>
                <button type="button" className="button submit" onClick={onNewDrink}>
                🔄
                </button>
            </form>
        </div>
    );
                };
export default BaristaForm;