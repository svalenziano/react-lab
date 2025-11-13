import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { useState } from 'react';
import './sv.css'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)

let superCount = [0];

function MyButton() {
    
    const handleclick = () => {
        superCount[0] = superCount[0] + 1;
        console.log(superCount[0]);
    }

    return (
        <button className={String(superCount[0])} onClick={handleclick}>
            I'm a button! {superCount[0]}
        </button>
    )
}

function MyApp() {
    return (
        <div className='boring'>
          <h2>What a great app!</h2>
          <p>How is <br/><br/> ze life?</p>
          <MyButton />
          <MyButton />
          <MyButton />
          <DataList />
          <MyButton />
          <MyButton />
          <MyButton />
        </div>
    )
}

const stuff = [
    {place: "Durham, NC", data: 1234},
    {place: "Paris, France", data: 4567},
    {place: "Taipei, Taiwan", data: 8901},
]

function DataList() {
    const items = stuff.map(i => <li>{i.place} 👉 {i.data} </li>);
    return (
        <ul>
          {items}
        </ul>
    )
}