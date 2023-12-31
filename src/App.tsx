import React, { ReactElement, useState } from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { gameJams, games, home, notFound, others, projects } from './assets/constants/constants'

function App(): ReactElement {
  const [selectedFilter, setSelectedFilter] = useState<string | undefined>(undefined)

  const onTabChange = () => {
    setSelectedFilter(undefined)
  }

  return (
    <div className='app'>
      <BrowserRouter>
        <Header selectedFilter={selectedFilter} onTabChange={onTabChange} />
        <div className='content'>
          <Routes>
            <Route path='/' element={
              <Cards key={'home'} cardList={home} showCount={false} />
            } />
            <Route path='projects' element={
              <Cards key={'projects'} cardList={projects} />
            } />
            <Route path='games' element={
              <Cards key={'games'} cardList={games} />
            } />
            <Route path='game-jams' element={
              <Cards
                key={'gameJams'}
                cardList={gameJams}
                selectedFilter={selectedFilter}
                onFilterChange={setSelectedFilter}
              />
            } />
            <Route path='others' element={
              <Cards key={'others'} cardList={others} />
            } />
            <Route path='*' element={
              <Cards key={'notFound'} cardList={notFound} showCount={false} colour={'red'} />
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
