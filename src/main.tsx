import { StrictMode, type MouseEventHandler } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <DoggoHerd />
    </StrictMode>,
)

function Doggo({num}) {
  return <h1>Doggo number {num}</h1>
}

function DoggoHerd() {
  const result = [];
  for (let i=0; i < Math.random() * 12; i++) {
    result.push(<Doggo num={i} key={i}/>)
  }
  return <div>{result}</div>
}