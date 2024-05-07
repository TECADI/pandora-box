import { colors } from '@pandora-box/design-system'
import { getContrast } from 'polished'
import '../styles/colors-grid.css'

export const ColorsGrid = () => {
  return (
    <div className="colors-grid">
      {Object.entries(colors).map(([key, color]) => (
        <div
          key={key}
          className="color-card"
          style={{
            backgroundColor: color,
            color: getContrast(color, '#fff') > 3.5 ? '#fff' : '#000',
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      ))}
    </div>
  )
}
