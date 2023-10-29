import React, { ReactElement } from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import NotFound from './components/NotFound'
import './App.scss'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'
import { projects } from './assets/constants/projects'
import { gameJamGames, games } from './assets/constants/games'
import { home } from './assets/constants/home'
import Card from './components/Card'

function App(): ReactElement {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={
              <Card cardDetails={home} />
            } />
            <Route path='projects' element={
              <Cards title='projects' cards={projects} />
            } />
            <Route path='games' element={
              <div>
                <Cards title='games' cards={games} />
                <Cards title='game jams' cards={gameJamGames} />
              </div>
            } />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
