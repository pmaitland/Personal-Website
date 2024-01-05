import React, { HTMLAttributes, ReactElement, useState } from 'react'
import Card from './Card'
import '../assets/css/Cards.scss'
import { CardList } from '../types/cardList'
import useIsMobile from '../hooks/useIsMobile'
import classNames from 'classnames'

interface CardsProps extends HTMLAttributes<HTMLDivElement> {
  cardList: CardList
  showCount?: boolean
  showDropdowns?: boolean
  colour?: 'green' | 'red' | 'blue' | 'white'
  selectedFilter?: string
  onFilterChange?: (filter: string) => void
}

function Cards({
  cardList,
  showCount = true,
  showDropdowns = true,
  colour = 'green',
  selectedFilter,
  onFilterChange
}: CardsProps): ReactElement {
  const isMobile = useIsMobile()

  const other = 'other'

  const filteredCards = cardList.cards.filter(card => !selectedFilter
    || (card.subtitles && card.subtitles.indexOf(selectedFilter) > -1)
    || (selectedFilter === other && card.subtitles?.filter(filter => cardList?.filters?.includes(filter)).length === 0)
  )

  const [isReverse, setIsReverse] = useState<boolean>(false)

  const isDropdownsShown = showDropdowns && (cardList.filters || cardList.cards.length > 1)

  const handleSortChange = (selected: React.ChangeEvent<HTMLSelectElement>) => {
    setIsReverse(selected.target.selectedOptions[0].value === 'oldest')
  }

  const handleFilterChange = (selected: React.ChangeEvent<HTMLSelectElement>) => {
    if (!onFilterChange || !cardList.filters) return
    selected.target.selectedIndex-1 === cardList.filters?.length
      ? onFilterChange(other)
      : onFilterChange(cardList.filters[selected.target.selectedIndex-1])
  }

  return (
    <div className={classNames('cards', colour)}>
      {cardList.description &&
        <p className={'description'}>{cardList.description}</p>
      }
      <div className={classNames('options', { ['mobile']: isMobile })}>
        {showCount &&
          <p className={classNames('count', colour)}>
            {filteredCards.length} item{filteredCards.length === 1 ? '' : 's'}
          </p>
        }
        {isDropdownsShown &&
          <div className={classNames('dropdowns', { ['mobile']: isMobile })}>
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
            {cardList.cards.length > 1 &&
              <select
                className={classNames(colour)}
                onChange={selected => handleSortChange(selected)}
                defaultValue={isReverse ? 'oldest' : 'newest'}
              >
                <option value={'newest'}>{'Newest'}</option>
                <option value={'oldest'}>{'Oldest'}</option>
              </select>
            }
          </div>
        }
      </div>
      <div className={classNames('list', { ['mobile']: isMobile })}>
        {!isReverse && filteredCards.map((card, index) => (
          <div className={'card-wrapper'} key={index}>
            <Card cardDetails={card} />
            {isMobile && index < filteredCards.length - 1 &&
              <hr className={classNames(colour)} />
            }
          </div>
        ))}
        {isReverse && filteredCards.reverse().map((card, index) => (
          <div className={'card-wrapper'} key={index}>
            <Card cardDetails={card} />
            {isMobile && index < filteredCards.length - 1 &&
              <hr className={classNames(colour)} />
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cards
