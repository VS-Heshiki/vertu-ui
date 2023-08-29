import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
    display: 'flex',
    color: '$gray200',
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$regular',
    background: '$gray900',
    padding: '$4 $5',
    borderRadius: '$xs',
    border: '2px solid $gray900',
    resize: 'none',
    minHeight: 80,

    '&:disabled': {
        opacity: '0.5',
        cursor: 'not-allowed'
    },

    '&:focus': {
        outline: 0,
        borderColor: '$vertu500'
    }
})

export interface TextAreaProps extends ComponentProps<typeof TextArea> { }

TextArea.displayName = 'TextArea'
