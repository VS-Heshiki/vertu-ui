import { Meta, StoryObj } from '@storybook/react'

import { Box, BoxProps, Text } from '@vertu-ui/react'

export default {
    title: 'Surface/Box',
    component: Box,
    tags: ['autodocs'],
    args: {
        children: (
            <Text>Example of box</Text>
        ),
    },
    argTypes: {
        children: {
            control: null
        }
    }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
