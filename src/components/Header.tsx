import { HTMLAttributes, ReactElement } from 'react'
import '../assets/css/Header.scss'
import { Link, useLocation } from 'react-router-dom'
import useIsMobile from '../hooks/useIsMobile'
import classNames from 'classnames'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  selectedFilter?: string,
  onTabChange: () => void
}

function Header({ selectedFilter, onTabChange }: HeaderProps): ReactElement {
  const { pathname } = useLocation()
  const isMobile = useIsMobile()

  const tabs = [
    '',
    'games',
    'game-jams',
    'projects',
    'others'
  ]

  return (
    <div className={classNames('header', { ['mobile']: isMobile })}>
      <div className='name'>
        <p>p@maitland</p>
        {!isMobile &&
          <div className='prompt'>
            <p className={'white'}>:</p>
            <p className={'blue'}>
              {pathname === '/' ? '~' : pathname}
              {selectedFilter && `/${selectedFilter.toLowerCase().replaceAll(' ', '-')}`}
            </p>
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
              className={classNames('tab-name', { ['mobile']: isMobile && pathname === `/${tab}` })}
              onClick={() => onTabChange()}
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
