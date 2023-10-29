import { ReactElement } from 'react'
import '../assets/css/Header.scss'
import { Link, useLocation } from 'react-router-dom';

function Header(): ReactElement {
  const { pathname } = useLocation()

  return (
    <div className='header'>
      <div className='prompt'>
        <p>p@maitland</p>
        <p className={'white'}>:</p>
        <p className={'blue'}>{pathname === '/' ? '~' : pathname}</p>
        <p className={'white'}>$</p>
        <p className={'blink'}>|</p>
      </div>
      <div className='navbar'>
        <Link to="/">{'>home'}</Link>
        <Link to="/projects">{'>projects'}</Link>
        <Link to="/games">{'>games'}</Link>
      </div>
    </div>
  )
}

export default Header
