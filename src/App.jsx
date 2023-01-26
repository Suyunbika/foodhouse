import { useState } from 'react'
import './App.css'
import Category from './components/Category/Category'
import Header from './components/Header/Header'
import ListMenu from './components/List-menu/ListMenu'
import Main from './components/Main/Main'
import Menu from './components/Menu/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Menu />
      <Category />
      <ListMenu />
    </>
  )
}

export default App
