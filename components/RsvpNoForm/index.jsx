import React, { useState } from 'react';
import styles from './index.module.scss';

const RsvpNoForm = () => {
    return (
        <form
            name="Declined"
            action="/declined"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit="submit"
        >
            <input type="hidden" name="form-name" value="declined" />
            <div className={styles.inputWrapper}>
                <label htmlFor="name">Имена</label>
                <input type="text" id="name" name="name" required />
            </div>
            <div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="message">Съобщение</label>
                    <textarea name="message" required></textarea>
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
