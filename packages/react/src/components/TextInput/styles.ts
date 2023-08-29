import { styled } from '../../styles'

export const InputContainer = styled('div', {
    boxSizing: 'border-box',
    backgroundColor: '$gray900',
    borderRadius: '$sm',
    padding: '$3 $4',

    display: 'flex',
    alignItems: 'baseline',
})

export const Prefix = styled('span', {
    color: '$gray500',
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$regular'
})

export const TextInput = styled('input', {
    color: '$gray200',
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$regular',
    background: 'transparent',
    width: '100%',
    border: '2px solid $gray900',
    borderRadius: '$xs',
    resize: 'none',

    '&:disabled': {
        opacity: '0.5',
        cursor: 'not-allowed'
    },

    '&:focus': {
        outline: 0,
        borderColor: '$vertu500'
    },
})
