import { HTMLAttributes, ReactElement } from 'react'
import Card from './Card'
import '../assets/css/Cards.scss'
import { CardDetails } from '../types/cardDetails'

interface CardsProps extends HTMLAttributes<HTMLDivElement> {
  title: string,
  cards: CardDetails[]
}

function Cards({ title, cards }: CardsProps): ReactElement {
  return (
    <div>
      <div className='section-header'>
        <p className='section-name'>{title}</p>
        <p className='count'>{cards.length} item{cards.length === 1 ? '' : 's'}</p>
      </div>
      <div className='cards'>
        {cards.map(card => (
          <Card cardDetails={card} />
        ))}
      </div>
    </div>
  )
}

export default Cards
