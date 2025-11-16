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
  if (editMode) return <b>{value}</b>
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
        <b>{formState.first}</b>
        <input type="text" name="first" onChange={handleChange}/>
      </label>
      <label>
        Last name:{' '}
        <b>Jacobs</b>
        <input />
      </label>
      <button type="submit">
        {editMode ? "Save Profile" : "Edit Profile"}
      </button>
      <p><i>Hello, Jane Jacobs!</i></p>
    </form>
  );
}
