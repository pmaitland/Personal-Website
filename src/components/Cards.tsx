import React, { HTMLAttributes, ReactElement } from 'react'
import Card from './Card'
import '../assets/css/Cards.scss'
import { CardList } from '../types/cardList'
import useIsMobile from '../hooks/useIsMobile'
import classNames from 'classnames'

interface CardsProps extends HTMLAttributes<HTMLDivElement> {
  cardList: CardList,
  showCount?: boolean,
  colour?: 'green' | 'red' | 'blue' | 'white',
  selectedFilter?: string,
  onFilterChange?: (filter: string) => void
}

function Cards({ cardList, showCount = true, colour = 'green', selectedFilter, onFilterChange }: CardsProps): ReactElement {
  const isMobile = useIsMobile()

  const other = 'other'

  const filteredCards = cardList.cards.filter(card => !selectedFilter
    || (card.subtitles && card.subtitles.indexOf(selectedFilter) > -1)
    || (selectedFilter === other && card.subtitles?.filter(filter => cardList?.filters?.includes(filter)).length === 0))

  const handleFilterChange = (selected: React.ChangeEvent<HTMLSelectElement>) => {
    if (!onFilterChange || !cardList.filters) return
    selected.target.selectedIndex-1 === cardList.filters?.length
      ? onFilterChange(other)
      : onFilterChange(cardList.filters[selected.target.selectedIndex-1])
  }

  return (
    <div className={classNames('cards', colour)}>
      <div className={classNames('options', { ['mobile']: isMobile })}>
        {showCount &&
          <p className={classNames('count', colour)}>
            {filteredCards.length} item{filteredCards.length === 1 ? '' : 's'}
          </p>
        }
        {cardList.filters &&
          <select
            className={classNames(colour)}
            onChange={selected => handleFilterChange(selected)}
          >
            <option value={'default'}>{'All'}</option>
            {cardList.filters.map(filter =>
              <option key={filter} value={filter}>{filter}</option>
            )}
            <option value={other}>{'Other'}</option>
          </select>
        }
      </div>
      <div className={classNames('list', { ['mobile']: isMobile })}>
        {filteredCards.map(card => (
          <Card key={card.title} cardDetails={card} />
        ))}
      </div>
    </div>
  )
}

export default Cards
