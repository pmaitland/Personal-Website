import React, { HTMLAttributes, ReactElement } from 'react'
import Card from './Card'
import '../assets/css/Cards.scss'
import { CardDetails } from '../types/cardDetails'
import useIsMobile from '../hooks/useIsMobile'
import classNames from 'classnames'

interface CardsProps extends HTMLAttributes<HTMLDivElement> {
  cards: CardDetails[],
  showCount?: boolean,
  filters?: string[],
  selectedFilter?: string,
  onFilterChange?: (filter: string) => void
}

function Cards({ cards, showCount = true, filters, selectedFilter, onFilterChange }: CardsProps): ReactElement {
  const isMobile = useIsMobile()
  const filteredCards = cards.filter(card => !selectedFilter || card.subtitles && card.subtitles.indexOf(selectedFilter) > -1)

  return (
    <div className='cards'>
      <div className={classNames('header', { ['mobile']: isMobile })}>
        {showCount &&
          <p className='count'>
            {filteredCards.length} item{filteredCards.length === 1 ? '' : 's'}
          </p>
        }
        {filters &&
          <select onChange={selected => {
            onFilterChange && onFilterChange(filters[selected.target.selectedIndex - 1])
          }}>
            <option value={'default'}>{'All'}</option>
            {filters.map(filter =>
              <option key={filter} value={filter}>{filter}</option>
            )}
          </select>
        }
      </div>
      <div className={classNames('content', { ['mobile']: isMobile })}>
        {filteredCards.map(card => (
          <Card key={card.title} cardDetails={card} />
        ))}
      </div>
    </div>
  )
}

export default Cards
