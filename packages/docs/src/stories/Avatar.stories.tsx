import { Meta, StoryObj } from '@storybook/react'

import { Avatar, AvatarProps } from '@vertu-ui/react'

export default {
    title: 'Data Display/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    args: {
        src: 'https://avatars.githubusercontent.com/u/57600375?v=4',
        alt: 'VS-Heshiki'
    }
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
    args: {
        src: undefined
    }
}
