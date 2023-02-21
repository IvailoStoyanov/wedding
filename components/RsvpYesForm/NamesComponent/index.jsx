import React, { useState } from 'react';

const NamesComponent = ({ guestsArray, setGuestsArray }) => {
  let nextId = 0;

  const [name, setName] = useState('');

  const handleNameSubmission = () => {
    if (name.length === 0) return null;

    setName('');
    setGuestsArray([
      ...guestsArray,
      { id: nextId++, name: name }
    ])
  }

  return (
    <div>
      <div>
        <input type="text" id="firstName" name="name" onChange={e => setName(e.target.value)} value={name} />
        <input type="text" id="lastName" name="name" />
      </div>
      <button onClick={() => handleNameSubmission()}
        type="button"
        disabled={guestsArray.length > 4}
      >
        Добавяне
      </button>
      <ul>
        {guestsArray.map((artist, index) => (
          <li key={index}>{artist.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default NamesComponent;
