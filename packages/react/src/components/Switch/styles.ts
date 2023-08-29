import * as Switch from '@radix-ui/react-switch'
import { styled } from '../../styles'

export const SwitchContainer = styled(Switch.Root, {
    all: 'unset',
    width: 42,
    height: 25,
    backgroundColor: '$gray400',
    borderRadius: '9999px',
    position: 'relative',
    boxShadow: '0 2px 10px $black',
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

    variants: {
        colors: {
            default: {
                '&:focus': { boxShadow: '0 0 0 2px $green300' },
                '&[data-state="checked"]': { backgroundColor: '$green300' },
            },

            primary: {
                '&:focus': { boxShadow: '0 0 0 2px $vertu500' },
                '&[data-state="checked"]': { backgroundColor: '$vertu500' },
            },

            secondary: {
                '&:focus': { boxShadow: '0 0 0 2px $vertu700' },
                '&[data-state="checked"]': { backgroundColor: '$vertu700' },
            },

            tertiary: {
                '&:focus': { boxShadow: '0 0 0 2px $vertu900' },
                '&[data-state="checked"]': { backgroundColor: '$vertu900' },
            }
        }
    },

    defaultVariants: { colors: 'default' }
})

export const SwitchAccept = styled(Switch.Thumb, {
    display: 'block',
    width: 21,
    height: 21,
    backgroundColor: 'white',
    borderRadius: '9999px',
    boxShadow: '0 2px 2px $black',
    transition: 'transform 400ms',
    transform: 'translateX(2px)',
    willChange: 'transform',
    '&[data-state="checked"]': { transform: 'translateX(19px)' },
})
