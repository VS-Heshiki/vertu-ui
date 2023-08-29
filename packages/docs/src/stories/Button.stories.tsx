import { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '@vertu-ui/react'
import { PaperPlaneTilt } from 'phosphor-react'

export default {
    title: 'Form/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: 'Send',
        variant: 'primary',
        disabled: false
    },
    argTypes: {
        variant: {
            options: ['primary', 'secondary', 'tertiary', 'attention', 'warning'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
    args: {
        variant: 'primary'
    }
}

export const Secondary: StoryObj<ButtonProps> = {
    args: {
        variant: 'secondary'
    }
}

export const Attention: StoryObj<ButtonProps> = {
    args: {
        variant: 'attention'
    }
}

export const Warning: StoryObj<ButtonProps> = {
    args: {
        variant: 'warning'
    }
}

export const Tertiary: StoryObj<ButtonProps> = {
    args: {
        variant: 'tertiary'
    }
}

export const WithIcon: StoryObj<ButtonProps> = {
    args: {
        children: (
            <>
                Send
                <PaperPlaneTilt weight='bold' />
            </>
        )
    }
}

export const Disabled: StoryObj<ButtonProps> = {
    args: {
        disabled: true
    }
}
