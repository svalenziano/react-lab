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
    return (
        <button>I'm a button!</button>
    )
}

function MyApp() {
    return (
        <div className='boring'>
          <h2>What a great app!</h2>
          <p>How is <br/><br/> ze life?</p>
          <MyButton />
        </div>
    )
}