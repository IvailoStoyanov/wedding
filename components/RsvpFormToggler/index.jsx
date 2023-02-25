import React, { useState } from 'react';
import styles from './index.module.scss';
import RsvpNoForm from '../RsvpNoForm';
import RsvpYesForm from '../RsvpYesForm';

const RsvpFormToggler = () => {
  const [guestIsComing, setGuestIsComing] = useState(true);

  return (
    <div>
      <p>Ще дойдете ли?</p>
      <button className={`${styles.button} ${guestIsComing ? styles.active : null}`} onClick={() => setGuestIsComing(true)}>Да, ще пия с Вас.</button>
      <button className={`${styles.button} ${!guestIsComing ? styles.active : null}`} onClick={() => setGuestIsComing(false)}>Не, ще пия в нас.</button>
      {
        guestIsComing ? <RsvpYesForm /> : <RsvpNoForm />
      }
    </div>
  );
};

export default RsvpFormToggler;
