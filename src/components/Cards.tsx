import React, { HTMLAttributes, ReactElement, useState } from 'react'
import Card from './Card'
import '../assets/css/Cards.scss'
import { CardDetails } from '../types/cardDetails'

interface CardsProps extends HTMLAttributes<HTMLDivElement> {
  title: string,
  cards: CardDetails[],
  filters?: string[],
  showCount?: boolean
}

function Cards({ title, cards, filters, showCount = true }: CardsProps): ReactElement {
  const DEFAULT_FILTER = '-'
  const [selectedFilter, setSelectedFilter] = useState<string>(DEFAULT_FILTER)
  const cardCount = cards.filter(
    card => selectedFilter === DEFAULT_FILTER ||
    (card.subtitles && card.subtitles.indexOf(selectedFilter) > -1)
  ).length

  return (
    <div>
      <div className='section-header'>
        <p className='section-name'>{title}</p>
        {showCount &&
          <p className='count'>{cardCount} item{cardCount === 1 ? '' : 's'}</p>
        }
        {filters &&
          <select onChange={selected => {
            setSelectedFilter(selected.target.selectedIndex > 0
              ? filters[selected.target.selectedIndex-1]
              : DEFAULT_FILTER
            )
          }}>
            <option value={'default'}>{DEFAULT_FILTER}</option>
            {filters.map(filter =>
              <option key={filter} value={filter}>{filter}</option>
            )}
          </select>
        }
      </div>
      <div className='cards'>
        {cards
          .filter(card => selectedFilter === DEFAULT_FILTER || (card.subtitles && card.subtitles.indexOf(selectedFilter) > -1))
          .map(card => (
            <Card key={card.title} cardDetails={card} />
          ))
        }
      </div>
    </div>
  )
}

export default Cards
