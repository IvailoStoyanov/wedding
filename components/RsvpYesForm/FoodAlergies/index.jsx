import React from 'react';

const FoodAlergies = ({hasAlergies}) => {
  if(!hasAlergies) return;

  return (
    <div>
      <label htmlFor="story">Попълнете вашите алергии или други рестрикции</label>
      <textarea name="story" required></textarea>
    </div>
  )
};

export default FoodAlergies;
