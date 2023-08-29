import { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@vertu-ui/react'

export default {
    title: 'Form/Text Area',
    component: TextArea,
    tags: ['autodocs'],
    decorators: [
        (Story) => {
            return (
                <Box as='label' css={ { display: 'flex', flexDirection: 'column', color: '$gray200', gap: '$2' } }>
                    <Text sizes={ 'sm' }>Observations</Text>
                    { Story() }
                </Box>
            )
        }
    ],
    args: {
        placeholder: 'Add any observations'
    }
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
    args: {
        placeholder: 'Add any observations'
    }
}

export const Disabled: StoryObj<TextAreaProps> = {
    args: {
        disabled: true,
        placeholder: 'Is disabled 🚫'
    }
}
