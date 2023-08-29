import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
    all: 'unset',
    borderRadius: '$sm',
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$medium',
    textAlign: 'center',
    minWidth: 120,
    boxSizing: 'border-box',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$2',
    cursor: 'pointer',

    padding: '0 $4',

    '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.7,
        backgroundColor: '$gray200'
    },

    svg: {
        width: '$4',
        height: '$4'
    },

    variants: {
        variant: {
            primary: {
                color: '$white',
                backgroundColor: '$vertu500',

                '&:not(:disabled):hover': {
                    backgroundColor: '$vertu700',
                    transition: 'background-color 0.4s'
                }
            },

            secondary: {
                color: '$white',
                backgroundColor: '$vertu300',

                '&:not(:disabled):hover': {
                    backgroundColor: '$vertu500',
                    transition: 'background-color 0.4s'
                }
            },

            tertiary: {
                color: '$white',
                backgroundColor: '$vertu700',

                '&:not(:disabled):hover': {
                    backgroundColor: '$vertu900',
                    transition: 'background-color 0.4s'
                }
            },

            attention: {
                color: '$black',
                backgroundColor: '$yellow300',

                '&:not(:disabled):hover': {
                    backgroundColor: '$yellow500',
                    transition: 'background-color 0.4s'
                }
            },

            warning: {
                color: '$white',
                backgroundColor: '$red300',

                '&:not(:disabled):hover': {
                    backgroundColor: '$red500',
                    transition: 'background-color 0.4s'
                }
            }
        },
        size: {
            sm: {
                height: 36
            },
            md: {
                height: 48
            }
        }
    },

    defaultVariants: { variant: 'primary', size: 'md' }
})

export interface ButtonProps extends ComponentProps<typeof Button> {
    as: ElementType
}

Button.displayName = 'Button'
