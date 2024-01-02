import React, { HTMLAttributes, ReactElement } from 'react'
import { CardDetails } from '../types/cardDetails'
import '../assets/css/Card.scss'
import useIsMobile from '../hooks/useIsMobile'
import classNames from 'classnames'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  cardDetails: CardDetails
}

function Card({ cardDetails }: CardProps): ReactElement {
  const isMobile = useIsMobile()

  return (
    <div className={classNames('card', { ['mobile']: isMobile })}>
      <div className='text'>
        <div className='titles'>
          <p className={'title'}>{cardDetails.title}</p>
          {cardDetails.subtitles &&
          <p className={'subtitles'}>
            {cardDetails.subtitles.map((subtitle, i) => (
              i > 0 ? ` / ${subtitle}` : subtitle
            ))
            }
          </p>
          }
        </div>
        {isMobile && cardDetails.image &&
          <img src={`/images/${cardDetails.image}`} className={classNames('image', { ['mobile']: isMobile })} alt={cardDetails.title} />
        }
        <p className={'body'}>{cardDetails.body}</p>
        {cardDetails.links &&
          <div className={'links'}>
            {Object.keys(cardDetails.links).map(link => (
              <p key={link} className='link'>
                {'>'}<a href={cardDetails.links?.[link]} target='_blank' rel="noreferrer">{link}</a>
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
