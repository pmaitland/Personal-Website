import { ChangeEvent, FormEvent, HTMLAttributes, ReactElement, useState } from 'react'
import '../assets/css/Header.scss'
import { Link, useLocation } from 'react-router-dom'
import useIsMobile from '../hooks/useIsMobile'
import classNames from 'classnames'
import { emojis } from '../assets/constants/constants'

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  selectedFilter?: string,
  onTabChange: () => void
}

function Header({ selectedFilter, onTabChange }: HeaderProps): ReactElement {
  const { pathname } = useLocation()
  const isMobile = useIsMobile()
  const [prompt, setPrompt] = useState<string>('')
  const [decorator, setDecorator] = useState<string>('@');

  const tabs = [
    '',
    'games',
    'game-jams',
    'projects',
    'others'
  ]

  const onPromptSubmit = (e: FormEvent<HTMLFormElement>) => {
    emojis.forEach(emoji => {
      if (emoji[prompt]) {
        setDecorator(emoji[prompt])
      }
    })
    setPrompt('')
    e.preventDefault()
  }

  const handlePromptChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value)
  }

  return (
    <div className={classNames('header', { ['mobile']: isMobile })}>
      <div className='name'>
        <p>p{decorator}maitland</p>
        {!isMobile &&
          <div className='cli'>
            <p className={'white'}>:</p>
            <p className={classNames('blue', 'path')}>
              {pathname === '/' ? '~' : '~' + pathname}
              {selectedFilter && `/${selectedFilter.toLowerCase().replaceAll(' ', '-')}`}
            </p>
            <p className={'white'}>$&nbsp;</p>
            <form className={'prompt-form'} onSubmit={e => onPromptSubmit(e)}>
              <input className={classNames('white', 'prompt')} value={prompt} onChange={handlePromptChange} maxLength={30} />
            </form>
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
