import { ReactElement } from 'react'
import '../assets/css/Footer.scss'
import useIsMobile from '../hooks/useIsMobile'
import classNames from 'classnames'

function Footer(): ReactElement {
  const isMobile = useIsMobile()

  return (
    <div className={classNames('footer', { ['mobile']: isMobile })}>
      <div className='copyright'>
        &copy; 2024 Peter Maitland
      </div>
    </div>
  )
}

export default Footer
