import { ReactElement, useRef, useEffect, useState } from 'react'
import '../assets/css/DigitalRain.scss'

interface Droplet {
  y: number
  characters: string[]
}

function createDroplet(length: number, charSize: number, chars: string): Droplet {
  return {
    y: Math.floor(Math.random() * (window.innerHeight + length * charSize)),
    characters: Array.from({ length: length }, () => chars[Math.floor(Math.random() * chars.length)])
  }
}

function DigitalRain(): ReactElement {
  const ref = useRef<HTMLCanvasElement>(null)

  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ'
  const charSize = 24
  const dropletLength = 15
  const dropletOpaqueLength = dropletLength / 3
  const [columnCount, setColumnCount] = useState<number>(Math.floor(window.innerWidth / charSize) + 1)
  const [droplets, setDroplets] = useState<Droplet[]>(Array.from({ length: columnCount }, () => createDroplet(dropletLength, charSize, chars)))

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current) {
        const context = ref.current.getContext('2d')
        if (context) {
          context.canvas.width = window.innerWidth
          context.canvas.height = window.innerHeight

          const currentColumnCount = Math.floor(window.innerWidth / charSize) + 1
          if (columnCount < currentColumnCount) {
            let index = columnCount;
            while (index < currentColumnCount) {
              droplets[index] = createDroplet(dropletLength, charSize, chars)
              index++;
            }
            setColumnCount(Math.floor(window.innerWidth / charSize) + 1)
          }

          context.fillStyle = "rgba(15, 15, 15, 1)"
          context.fillRect(0, 0, window.innerWidth, window.innerHeight)
          context.fillStyle = "rgba(11, 248, 114, 1)"
          context.font = `${charSize}px 'Good Old DOS', monospace`

          const updatedDroplets = [...droplets]
          for (let droplet = 0; droplet < droplets.length; droplet++) {
            for (let char = 0; char < dropletLength; char++) {
              if (char === 0) {
                context.fillStyle = "rgba(235, 235, 235, 1)"
              } else if (char > 0 && char < dropletOpaqueLength) {
                context.fillStyle = "rgba(11, 248, 114, 1)"
              } else {
                const alpha = 1 / (char - dropletOpaqueLength) * 1.5
                context.fillStyle = `rgba(11, 248, 114, ${alpha})`
              }
              context.fillText(droplets[droplet].characters[char], droplet * charSize, droplets[droplet].y - charSize * char)

              if (Math.floor(Math.random() * 100) === 0) {
                updatedDroplets[droplet].characters[char] = chars[Math.floor(Math.random() * chars.length)]
              }
            }

            updatedDroplets[droplet].characters.unshift(...updatedDroplets[droplet].characters.splice(-1))

            updatedDroplets[droplet].y += charSize
            if (updatedDroplets[droplet].y > window.innerHeight + dropletLength * charSize) {
              updatedDroplets[droplet].y = 0
            }
          }
          setDroplets(updatedDroplets)
        }
      }
    }, 80)

    return () => clearInterval(interval)
  }, [chars, columnCount, droplets, dropletOpaqueLength])

  return <canvas className={'canvas'} ref={ref} />
}

export default DigitalRain
