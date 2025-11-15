import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RequestTracker />
  </StrictMode>,
)

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);

  async function handleClick() {
    setPending(pending + 1); // 0 + 1
    await delay(3000); 
    setPending(pending - 1);  // 0 - 1
    setCompleted(completed + 1);  // 0 + 1
  }

  return (
    <>
      <h3>
        Pending: {pending}
      </h3>
      <h3>
        Completed: {completed}
      </h3>
      <button onClick={handleClick}>
        Buy     
      </button>
    </>
  );
}

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
