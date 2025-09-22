import { component } from '@pionjs/pion'
import { styles } from './cosmoz-resizable.css'
import { nothing } from 'lit-html'
import useResizer from './hooks/use-resizer'

const Resizable = () => {
  useResizer()

  return nothing
}

customElements.define(
  'cosmoz-resizable',
  component(Resizable, {
    styleSheets: [styles]
  })
)

export { Resizable }
