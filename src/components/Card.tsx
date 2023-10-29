import { HTMLAttributes, ReactElement } from 'react'
import { CardDetails } from '../types/cardDetails'
import '../assets/css/Card.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  cardDetails: CardDetails
}

function Card({ cardDetails }: CardProps): ReactElement {
  return (
    <div className='card'>
      <div className='text'>
        <p className={'title'}>{cardDetails.title}</p>
        {cardDetails.subtitles &&
          <p className={'subtitles'}>
            {cardDetails.subtitles.map((subtitle, i) => (
              i > 0 ? ` / ${subtitle}` : subtitle
            ))
            }
          </p>
        }
        <p className={'body'}>{cardDetails.body}</p>
        {cardDetails.links &&
          <p className={'links'}>
            {Object.keys(cardDetails.links).map(link => (
              <p className='link'>{'>'}<a href={cardDetails.links?.[link]}>{link}</a></p>
            ))}
          </p>
        }
      </div>
      <div>
        {cardDetails.image &&
          <img src={`/images/${cardDetails.image}`} width='150' height='150' className='image'></img>
        }
      </div>
    </div>
  )
}

export default Card
