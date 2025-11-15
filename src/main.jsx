import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Form />
  </StrictMode>,
)

/*
 [ ] why are forms not updating?  My answer: every time the component renders, `firstName` and `lastName` are set to an empty string.  Also, since we're not using a Hook (eg setState), the component won't be notified of any change in state created by handlers (eg handleFirstNameChange)
*/
export default function Form() {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName("");
    setLastName("");
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}

