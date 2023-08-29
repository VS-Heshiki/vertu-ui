import { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@vertu-ui/react'

export default {
    title: 'Form/Multi Step',
    component: MultiStep,
    tags: ['autodocs'],
    args: {},
    decorators: [
        (Story) => {
            return (
                <Box as="label" css={ { display: 'flex', flexDirection: 'column', gap: '$2' } }>
                    { Story() }
                </Box>
            )
        }
    ]
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
    args: {
        steps: 4,
        activeStep: 1
    }
}

export const Full: StoryObj<MultiStepProps> = {
    args: {
        steps: 4,
        activeStep: 4
    }
}
