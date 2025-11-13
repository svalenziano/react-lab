import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './sv.css'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)

function MyButton() {
    let count = 0;
    return (
        <button className={String(count)}>I'm a button! {count}</button>
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
    const items = stuff.map(i => <li>{i.place}</li>);
    return (
        <ul>
          {items}
        </ul>
    )
}