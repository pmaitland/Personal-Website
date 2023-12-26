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
import { others } from './assets/constants/others'

function App(): ReactElement {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={
              <Cards cards={home} showCount={false} />
            } />
            <Route path='projects' element={
              <Cards cards={projects} />
            } />
            <Route path='games' element={
              <Cards cards={games} />
            } />
            <Route path='game-jam-games' element={
              <Cards cards={gameJamGames} filters={gameJamGamesFilters} />
            } />
            <Route path='others' element={
              <Cards cards={others} />
            } />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
