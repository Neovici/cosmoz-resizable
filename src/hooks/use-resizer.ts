import { useEffect } from '@pionjs/pion'
import { useHost } from '@neovici/cosmoz-utils/hooks/use-host'
import { ResizableProps, ResizerDirection, MousePosition } from '../types'
import { getMousePosition } from '../utils'

const useResizer = () => {
  const host = useHost() as HTMLElement & ResizableProps

  const getDirection = (): ResizerDirection => {
    if (host.resizer && 'direction' in host.resizer) {
      return host.resizer.direction
    }

    return 'horizontal'
  }

  const getElements = () => {
    const parent = host.parentElement
    if (!parent) return null

    const children = Array.from(parent.children)
    const index = children.indexOf(host)

    const previous = children[index - 1] as HTMLElement
    const next = children[index + 1] as HTMLElement

    if (!previous || !next) return null

    return {
      previous,
      next,
      container: parent
    }
  }

  const handleResize = (mousePosition: MousePosition) => {
    const elements = getElements()
    if (!elements || !host.resizer) return

    const panelSizes = host.resizer(mousePosition, elements)

    if (panelSizes) {
      host.dispatchEvent(
        new CustomEvent('resize', {
          detail: {
            mousePosition,
            previousSize: panelSizes.previousSize,
            nextSize: panelSizes.nextSize
          },
          bubbles: true
        })
      )
    }
  }

  const handleMouseDown = (e: MouseEvent) => {
    e.preventDefault()
    const mousePosition = getMousePosition(e)

    host.setAttribute('data-dragging', 'true')

    host.dispatchEvent(
      new CustomEvent('resize-start', {
        detail: { mousePosition },
        bubbles: true
      })
    )

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const mousePosition = getMousePosition(e)
      handleResize(mousePosition)
    }

    const handlePointerUp = () => {
      host.removeAttribute('data-dragging')

      host.dispatchEvent(
        new CustomEvent('resize-end', {
          detail: {},
          bubbles: true
        })
      )

      document.removeEventListener('mousemove', handlePointerMove)
      document.removeEventListener('mouseup', handlePointerUp)
    }

    document.addEventListener('mousemove', handlePointerMove)
    document.addEventListener('mouseup', handlePointerUp)
  }

  useEffect(() => {
    const direction = getDirection()
    host.setAttribute('data-direction', direction)
  }, [host.resizer])

  useEffect(() => {
    host.addEventListener('mousedown', handleMouseDown)

    return () => {
      host.removeEventListener('mousedown', handleMouseDown)
    }
  }, [])

  return null
}

export default useResizer
