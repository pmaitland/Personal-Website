import React, { ReactElement } from 'react'
import '../assets/css/Header.scss'
import { Link, useLocation } from 'react-router-dom'
import useIsMobile from '../hooks/useIsMobile'
import classNames from 'classnames'

function Header(): ReactElement {
  const { pathname } = useLocation()
  const isMobile = useIsMobile()

  const tabs = [
    '',
    'games',
    'game-jam-games',
    'projects',
    'others'
  ]

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
        {tabs.map(tab => (
          <div key={tab} className='tab'>
            <p>{'>'}</p>
            <Link
              to={`/${tab}`}
              className={classNames('tab-name', {['mobile']: isMobile && pathname === `/${tab}`})}
            >
              {tab === '' ? 'home' : tab}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Header
