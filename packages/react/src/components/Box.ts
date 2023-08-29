import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
    padding: '$4',
    backgroundColor: '$gray800',
    borderRadius: '8px',
    border: '1px solid $gray800'
})

export interface BoxProps extends ComponentProps<typeof Box> {
    as?: string
}

Box.displayName = 'Box'
