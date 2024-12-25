import { ReactElement, useState } from 'react'
import Header from './components/Header'
import Cards from './components/Cards'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { gameJams, games, home, notFound, others, projects } from './assets/constants/constants'
import classNames from 'classnames'
import useIsMobile from './hooks/useIsMobile'
import Footer from './components/Footer'

function App(): ReactElement {
  const isMobile = useIsMobile()
  const [selectedFilter, setSelectedFilter] = useState<string | undefined>(undefined)

  const onTabChange = () => {
    setSelectedFilter(undefined)
  }

  return (
    <div className={'app'}>
      <BrowserRouter>
        <Header selectedFilter={selectedFilter} onTabChange={onTabChange} />
        <div className={classNames('content', { ['mobile']: isMobile })}>
          <Routes>
            <Route path='/' element={
              <Cards
                key={'home'}
                cardList={home}
                showCount={false}
                showDropdowns={false}
              />
            } />
            <Route path='games' element={
              <Cards
                key={'games'}
                cardList={games}
              />
            } />
            <Route path='game-jams' element={
              <Cards
                key={'gameJams'}
                cardList={gameJams}
                selectedFilter={selectedFilter}
                onFilterChange={setSelectedFilter}
              />
            } />
            <Route path='projects' element={
              <Cards
                key={'projects'}
                cardList={projects}
              />
            } />
            <Route path='others' element={
              <Cards
                key={'others'}
                cardList={others}
                showDropdowns={false}
              />
            } />
            <Route path='*' element={
              <Cards
                key={'notFound'}
                cardList={notFound}
                showCount={false}
                showDropdowns={false}
                colour={'red'}
              />
            } />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
