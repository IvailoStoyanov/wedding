import React, { useState } from 'react';
import styles from './index.module.scss';
import FoodMenu from './FoodMenu';
import FoodAlergies from './FoodAlergies';
import NamesComponent from './NamesComponent'

const RsvpYesForm = () => {
  const [guestsArray, setGuestsArray] = useState([]);
  const [hasAlergies, setHasAlergies] = useState(false);

  return (
    <form
      name="accepted"
      action="/accepted"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="accepted" />
      <div>
        <NamesComponent guestsArray={guestsArray} setGuestsArray={setGuestsArray} />
        <FoodMenu guestsArray={guestsArray} />
      </div>
      <div>
        <p>Алергени</p>
        <input type="radio" id="alergiesYes" name="alergies" value="alergiesYes" onChange={() => setHasAlergies(true)}/>
        <label htmlFor="alergiesYes">Да</label>
        <input type="radio" id="alergiesNo" name="alergies" value="alergiesNo" onChange={() => setHasAlergies(false)}/>
        <label htmlFor="alergiesNo">Не</label>

      </div >
      <FoodAlergies hasAlergies={hasAlergies} />
      <div>
        <p>Желаете ли да се възползвате от организиран транспорт в посока София - Пасарел Лейк Клуб?</p>
        <input type="radio" id="transportYes" name="transport" value="transportYes" />
        <label htmlFor="transportYes">Да</label>
        <input type="radio" id="transportNo" name="transport" value="transportNo" />
        <label htmlFor="transportNo">Не</label>
      </div>
      <div>
        <label htmlFor="phone">Телефонен номер за връзка</label>
        <input type="number" name="phone" id="phone" required />
      </div>
      <div className={styles.inputWrapper}>
        <label htmlFor="story">Съобщение</label>
        <textarea name="story" required></textarea>
      </div>
      <input
        className={styles.submitButton}
        type="submit"
        value="Send form"
        name="submit"
      ></input>
    </form >
  );
};

export default RsvpYesForm;
