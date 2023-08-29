import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInputArea, TextInputProps } from '@vertu-ui/react'

export default {
    title: 'Form/Text Input',
    component: TextInputArea,
    tags: ['autodocs'],
    args: {
        placeholder: 'example@mail.com'
    },
    decorators: [
        (Story) => {
            return (
                <Box as='label' css={ { display: 'flex', flexDirection: 'column', color: '$gray200', gap: '$2' } }>
                    <Text sizes={ 'sm' }>Email Address</Text>
                    { Story() }
                </Box>
            )
        }
    ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Email Address'
    }
}

export const WithPrefix: StoryObj<TextInputProps> = {
    args: {
        placeholder: 'Username',
        prefix: 'cal.com/'
    }
}

export const Disabled: StoryObj<TextInputProps> = {
    args: {
        disabled: true,
        placeholder: 'Is disabled 🚫'
    }
}
