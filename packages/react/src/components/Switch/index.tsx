import { ComponentProps } from 'react'
import { SwitchAccept, SwitchContainer } from './styles'

export interface SwitchProps extends ComponentProps<typeof SwitchContainer> {
    colors?: 'default' | 'primary' | 'secondary' | 'tertiary'
}

export function Switch ({ colors, ...props }: SwitchProps) {
    return (
        <SwitchContainer colors={ colors } { ...props }>
            <SwitchAccept />
        </SwitchContainer>
    )
}

Switch.displayName = 'Switch'
