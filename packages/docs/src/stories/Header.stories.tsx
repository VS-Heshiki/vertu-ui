import { Meta, StoryObj } from '@storybook/react'

import { Header, HeaderProps } from '@vertu-ui/react'

export default {
    title: 'Typography/Heading',
    component: Header,
    tags: ['autodocs'],
    args: {
        children: (
            'Lorem ipsum dolor.'
        ),
        sizes: 'md'
    },
    argTypes: {
        sizes: {
            options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl'],
            control: {
                type: 'inline-radio'
            }
        }
    }
} as Meta<HeaderProps>

export const Primary: StoryObj<HeaderProps> = {}

export const CustomTag: StoryObj<HeaderProps> = {
    args: {
        children: 'H1 Heading',
        as: 'h1'
    },
    parameters: {
        docs: {
            description: {
                story: 'By default header component is a `<h2>`, which can be changed using property: `as`'
            }
        }
    }
}
