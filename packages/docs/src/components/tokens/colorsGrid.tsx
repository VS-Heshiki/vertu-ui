import { colors } from '@vertu-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid () {
    return (
        Object.entries(colors).map(([key, color]) => {
            return (
                <div key={ key } style={ { backgroundColor: color, padding: '2rem' } }>
                    <div style={ { display: 'flex', justifyContent: 'space-between', color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF' } }>
                        <span style={ { fontFamily: 'JetBrains Mono' } }>${ key }</span>
                        <span style={ { fontFamily: 'JetBrains Mono' } }>{ color }</span>
                    </div>
                </div>
            )
        })
    )
}
