type TokenTypeProps = {
    tokens: Record<string, string>,
    hasRemType?: boolean
}

import '../styles/tokens.styles.css'

export function TokensGrid ({ tokens, hasRemType = false }: TokenTypeProps) {
    return (
        <table className='tokens-grid'>
            <thead>
                <tr>
                    <th>
                        Key
                    </th>
                    <th>
                        Value
                    </th>
                    { hasRemType && (<th>Pixels</th>) }
                </tr>
            </thead>
            <tbody>
                { Object.entries(tokens).map(([key, value]) => {
                    return (
                        <tr key={ key }>
                            <td>{ key }</td>
                            <td>{ value }</td>
                            { hasRemType && (
                                <td>{ Number(value.replace('rem', '')) * 16 }px</td>
                            ) }
                        </tr>
                    )
                }) }
            </tbody>
        </table>
    )
}
