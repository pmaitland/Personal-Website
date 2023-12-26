import React, { HTMLAttributes, ReactElement, useState } from 'react'
import Card from './Card'
import '../assets/css/Cards.scss'
import { CardDetails } from '../types/cardDetails'
import useIsMobile from '../hooks/useIsMobile'
import classNames from 'classnames'

interface CardsProps extends HTMLAttributes<HTMLDivElement> {
  cards: CardDetails[],
  filters?: string[],
  showCount?: boolean
}

function Cards({ cards, filters, showCount = true }: CardsProps): ReactElement {
  const isMobile = useIsMobile()
  const defaultFilter = 'All'
  const [selectedFilter, setSelectedFilter] = useState<string>(defaultFilter)
  const filteredCards = cards.filter(
    card => selectedFilter === defaultFilter ||
    (card.subtitles && card.subtitles.indexOf(selectedFilter) > -1)
  )

  return (
    <div className='cards'>
      <div className={classNames('header', {['mobile']: isMobile})}>
        {showCount &&
          <p className='count'>
            {filteredCards.length} item{filteredCards.length === 1 ? '' : 's'}
          </p>
        }
        {filters &&
          <select onChange={selected => {
            setSelectedFilter(selected.target.selectedIndex > 0
              ? filters[selected.target.selectedIndex-1]
              : defaultFilter
            )
          }}>
            <option value={'default'}>{defaultFilter}</option>
            {filters.map(filter =>
              <option key={filter} value={filter}>{filter}</option>
            )}
          </select>
        }
      </div>
      <div className={classNames('content', {['mobile']: isMobile})}>
        {filteredCards.map(card => (
          <Card key={card.title} cardDetails={card} />
        ))}
      </div>
    </div>
  )
}

export default Cards
