import React, { useState } from 'react';
import styles from './index.module.scss';

const RsvpNoForm = () => {
  return (
    <form
    name="contact"
    action="/successNo"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    >
    <div>
      <input type="hidden" name="form-name" value="contact" />
      <div className={styles.inputWrapper}>
        <label htmlFor="name">Имена</label>
        <input type="text" id="name" name="name" required />
      </div>
    </div>
    <div>
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
    </div>
  </form>
  );
};

export default RsvpNoForm;
