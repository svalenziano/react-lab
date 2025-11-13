import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import './sv.css'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)

function MyButton() {
    const [count, setCount] = useState(0)
    
    const handleclick = () => setCount(count + 1);

    return (
        <button className={String(count)} onClick={handleclick}>I'm a button! {count}</button>
    )
}

function MyApp() {
    return (
        <div className='boring'>
          <h2>What a great app!</h2>
          <p>How is <br/><br/> ze life?</p>
          <MyButton />
          <DataList />
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