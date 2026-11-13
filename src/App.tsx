import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Products from './components/Products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>FakeStore</header>
      <article>
        <Products />
      </article>
      <footer><p>Készítette: Saját név</p></footer>
    </>
  )
}

export default App
