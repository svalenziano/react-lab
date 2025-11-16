import { StrictMode, type FormEvent } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import { useImmer } from 'use-immer';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*
Visual States?
  - edit
  - display

State change triggers?
  - Edit Profile / Save Profile button

useState?
  - mode = "edit" | "display"

Remove non essential?

Connect event handlers?
*/

function FlexiInput({editMode=false, value="", name="", onChange}) {
  if (editMode) return <b>{value.trim()}</b>
  else return <input type="text" name={name} value={value} onChange={onChange} />
}

function App() {
  const [editMode, setEditMode] = useState(false);
  const [formState, setFormState] = useState({
    first: "Jane",
    last: "Jacobs",
  });

  function handleModeToggle(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEditMode(!editMode);
  }

  function handleChange(e: FormEvent<HTMLInputElement>) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
      
    });
  }

  return (
    <form onSubmit={handleModeToggle}>
      <label>
        First name:{' '}
        <FlexiInput 
          editMode={editMode} 
          value={formState.first} 
          name="first" 
          onChange={handleChange} 
        />
      </label>
      <label>
        Last name:{' '}
        <FlexiInput 
          editMode={editMode} 
          value={formState.last} 
          name="last" 
          onChange={handleChange} 
        />

      </label>
      <button type="submit">
        {editMode ? "Save Profile" : "Edit Profile"}
      </button>
      <p><i>{`Hello ${formState.first} ${formState.last}!`}</i></p>
    </form>
  );
}
