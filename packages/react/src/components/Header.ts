import { ComponentProps } from '@stitches/react'
import { styled } from '../styles'
import { ElementType } from 'react'

export const Header = styled('h2', {
    color: '$gray100',
    fontFamily: '$default',
    lineHeight: '$short',
    margin: 0,

    variants: {
        sizes: {
            sm: { fontSize: '$lg' },
            md: { fontSize: '$xl' },
            lg: { fontSize: '$2xl' },
            xl: { fontSize: '$4xl' },
            '2xl': { fontSize: '$5xl' },
            '4xl': { fontSize: '$6xl' },
            '5xl': { fontSize: '$7xl' },
            '6xl': { fontSize: '$8xl' }
        }
    },
    defaultVariants: { sizes: 'md' }
})

export interface HeaderProps extends ComponentProps<typeof Header> {
    as?: ElementType
}

Header.displayName = 'Header'
