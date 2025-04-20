import { ReactElement, useRef, useEffect, useState } from 'react'
import '../assets/css/DigitalRain.scss'

function DigitalRain(): ReactElement {
  const ref = useRef<HTMLCanvasElement>(null)

  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers = '0123456789'
  const kana = 'ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ'
  const chars = letters + numbers + kana
  const charSize = 24
  const columnCount = Math.floor(window.innerWidth / charSize) + 1
  const dropletLength = 15
  const dropletOpaqueLength = dropletLength / 3
  const [dropletYs, setDropletYs] = useState<number[]>(Array.from({ length: columnCount }, () => Math.floor(Math.random() * (window.innerHeight + dropletLength * charSize))))
  const [dropletChars, setDropletChars] = useState<string[][]>(Array.from({ length: columnCount }, () => Array.from({ length: dropletLength }, () => chars[Math.floor(Math.random() * chars.length)])))

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current) {
        const context = ref.current.getContext('2d')
        if (context) {
          context.canvas.width = window.innerWidth
          context.canvas.height = window.innerHeight
          context.fillStyle = "rgba(15, 15, 15, 1)"
          context.fillRect(0, 0, window.innerWidth, window.innerHeight)
          context.fillStyle = "rgba(11, 248, 114, 1)"
          context.font = `${charSize}px 'Good Old DOS', monospace`
          const newDropletYs = [...dropletYs]
          const newDropletChars = [...dropletChars]
          for (let droplet = 0; droplet < dropletYs.length; droplet++) {
            for (let char = 0; char < dropletLength; char++) {
              context.shadowBlur = Math.max(0, 8 - char)
              if (char === 0) {
                context.fillStyle = "rgba(235, 235, 235, 1)"
                context.shadowColor = 'white'
              } else if (char > 0 && char < dropletOpaqueLength) {
                context.fillStyle = "rgba(11, 248, 114, 1)"
                context.shadowColor = 'green'
              } else {
                const alpha = 1 / (char - dropletOpaqueLength) * 1.5
                context.fillStyle = `rgba(11, 248, 114, ${alpha})`
              }
              context.fillText(dropletChars[droplet][char], droplet * charSize, dropletYs[droplet] - charSize * char)

              if (Math.floor(Math.random() * 100) === 0) {
                newDropletChars[droplet][char] = chars[Math.floor(Math.random() * chars.length)]
              }
            }

            newDropletChars[droplet].unshift(...newDropletChars[droplet].splice(-1))

            newDropletYs[droplet] += charSize
            if (newDropletYs[droplet] > window.innerHeight + dropletLength * charSize) {
              newDropletYs[droplet] = 0
            }
          }
          setDropletYs(newDropletYs)
          setDropletChars(newDropletChars)
        }
      }
    }, 80)

    return () => clearInterval(interval)
  }, [chars, dropletYs, dropletChars, dropletOpaqueLength])

  return <canvas className={'canvas'} ref={ref} />
}

export default DigitalRain
