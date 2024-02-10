import React from "react";

const RecipeChoices = ({ label, choices, handleChange, currentVal }) => {
  return (
    <div>
      <input
        type="text"
        name={label}
        value={currentVal}
        placeholder="Guess the ingredient..."
        onChange={handleChange}
        className="textbox"
      />
      <ul className="choices-list">
        {choices && choices.map((choice) => (
          <li key={choice}>
            {choice}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeChoices;
