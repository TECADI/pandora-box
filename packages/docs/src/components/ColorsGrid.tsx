import { colors } from '@pandora-box-tecadi/design-system'
import { getContrast } from 'polished'
import '../styles/colors-grid.css'

export const ColorsGrid = () => {
  const colorsPalletList = Object.entries(colors).map(([key, color]) => {
    return {
      key,
      color,
      contrast: getContrast(color, '#fff') > 3.5 ? '#fff' : '#000',
    }
  })

  const filteredBlackAndWhite = colorsPalletList.filter(
    // eslint-disable-next-line prettier/prettier
    ({ key }) => key !== 'black' && key !== 'white'
  )

  return (
    <div className="colors-grid">
      {filteredBlackAndWhite.map(({ key, color, contrast }) => (
        <div key={key} className="divider">
          <div
            className="color-card"
            style={{
              backgroundColor: color,
              color: contrast,
            }}
          ></div>

          <div className="color-content">
            <strong>{key}</strong>
            <span>{color}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
