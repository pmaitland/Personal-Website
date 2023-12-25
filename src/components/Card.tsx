import React, { HTMLAttributes, ReactElement } from 'react'
import { CardDetails } from '../types/cardDetails'
import '../assets/css/Card.scss'
import useIsMobile from '../hooks/useIsMobile'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  cardDetails: CardDetails
}

function Card({ cardDetails }: CardProps): ReactElement {
  const isMobile = useIsMobile()

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
        {isMobile && cardDetails.image &&
          <img src={`/images/${cardDetails.image}`} className='image' alt={cardDetails.title} />
        }
        <p className={'body'}>{cardDetails.body}</p>
        {cardDetails.links &&
          <div className={'links'}>
            {Object.keys(cardDetails.links).map(link => (
              <p key={link} className='link'>
                {'>'}<a href={cardDetails.links?.[link]}>{link}</a>
              </p>
            ))}
          </div>
        }
      </div>
      {!isMobile && cardDetails.image &&
        <img src={`/images/${cardDetails.image}`} className='image' alt={cardDetails.title} />
      }
    </div>
  )
}

export default Card
