import React, { useState } from 'react';

const FoodMenu = ({ guestsArray }) => {
  if (guestsArray.length !== 1) {
    return guestsArray.map((guest, index) =>
      <fieldset key={index}>
        <legend>Меню за {guest.name}:</legend>
        <div>
          <input type="radio" id={`meat${index}`} name={`food${index}`} value={`meat${index}`} />
          <label htmlFor={`meat${index}`}>Месо</label>
          <input type="radio" id={`veggie${index}`} name={`food${index}`} value={`veggie${index}`} />
          <label htmlFor={`veggie${index}`}>Вегетарианско</label>
        </div>
      </fieldset>
    );
  };

  return (
    <fieldset>
      <legend>Меню:</legend>
      <div>
        <input type="radio" id="meat" name="contact" value="meat" />
        <label htmlFor="meat">Месо</label>
        <input type="radio" id="veggie" name="contact" value="veggie" />
        <label htmlFor="veggie">Вегетарианско</label>
      </div>
    </fieldset>
  )
};

export default FoodMenu;
