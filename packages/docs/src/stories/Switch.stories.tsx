import { Meta, StoryObj } from '@storybook/react'
import { Box, Switch, SwitchProps, Text } from '@vertu-ui/react'

export default {
    title: 'Form/Switch',
    component: Switch,
    tags: ['autodocs'],
    args: {
        colors: 'default'
    },
    argTypes: {
        colors: {
            options: ['default', 'primary', 'secondary', 'tertiary'],
            control: {
                type: 'inline-radio'
            }
        }
    },
    decorators: [
        (Story) => {
            return (
                <Box as='label' css={ { display: 'flex', flexDirection: 'row', color: '$gray200', gap: '$2' } }>
                    { Story() }
                    <Text sizes={ 'sm' }>Accept terms of use</Text>
                </Box>
            )
        }
    ]
} as Meta<SwitchProps>

export const Default: StoryObj<SwitchProps> = {
    args: {
        colors: 'default'
    }
}

export const Primary: StoryObj<SwitchProps> = {
    args: {
        colors: 'primary'
    }
}

export const Secondary: StoryObj<SwitchProps> = {
    args: {
        colors: 'secondary'
    }
}

export const Tertiary: StoryObj<SwitchProps> = {
    args: {
        colors: 'tertiary'
    }
}
