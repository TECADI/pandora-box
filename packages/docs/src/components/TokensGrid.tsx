import '../styles/tokens-grid.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRemValue?: boolean
  hasSpaceValue?: boolean
}

export function TokensGrid({
  tokens,
  hasRemValue,
  hasSpaceValue,
}: TokensGridProps) {
  return (
    <table className="table-standard">
      <thead>
        <tr>
          <th>Token</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
          {hasSpaceValue && <th>Space</th>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
            {hasRemValue && <td>{parseFloat(value) * 16}px</td>}
            {hasSpaceValue && (
              <td>
                <div
                  className="space-width"
                  style={{
                    width: value,
                  }}
                />
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
