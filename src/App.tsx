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
import { gameJamGames, gameJamGamesFilters, games } from './assets/constants/games'
import { home } from './assets/constants/home'

function App(): ReactElement {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={
              <Cards title={'home'} cards={home} showCount={false} />
            } />
            <Route path='projects' element={
              <Cards title='projects' cards={projects} />
            } />
            <Route path='games' element={
              <div>
                <Cards title='games' cards={games} />
                <Cards title='game jams' cards={gameJamGames} filters={gameJamGamesFilters} />
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
