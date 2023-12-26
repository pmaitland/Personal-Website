import React, { ReactElement } from 'react'
import '../assets/css/Header.scss'
import { Link, useLocation } from 'react-router-dom'
import useIsMobile from '../hooks/useIsMobile'

function Header(): ReactElement {
  const { pathname } = useLocation()
  const isMobile = useIsMobile()

  return (
    <div className='header'>
      <div className='name'>
        <p>p@maitland</p>
        {!isMobile &&
          <div className='prompt'>
            <p className={'white'}>:</p>
            <p className={'blue'}>{pathname === '/' ? '~' : pathname}</p>
            <p className={'white'}>$</p>
            <p className={'blink'}>|</p>
          </div>
        }
      </div>
      <div className='navbar'>
        <Link to="/">{'>home'}</Link>
        <Link to="/games">{'>games'}</Link>
        <Link to="/game-jam-games">{'>game-jam-games'}</Link>
        <Link to="/projects">{'>projects'}</Link>
        <Link to="/others">{'>others'}</Link>
      </div>
    </div>
  )
}

export default Header
