import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { useImmer } from 'use-immer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyForm />
  </StrictMode>,
)

function MyForm() {

  const dPerson = {
    name: "Your Name",
    color: "blue",
  }

  const [person, setPerson] = useImmer(dPerson);

  function handleChange(ev) {
    setPerson(p => {
      p[ev.target.name] = ev.target.value;
    })
  }

    return (
      <form>
        <input 
          type="text"
          name="name"
          placeholder="Name?"
          value={person.name}
          onChange={handleChange}
        />
        <input 
          type="text"
          name="color"
          placeholder="Color?"
          value={person.color}
          onChange={handleChange}
        />
        <p>
          Hello {person.name}! 
          Your favorite color is 
          <span style={{color: person.color}}> {person.color} </span>
        </p>
      </form>
    )
}