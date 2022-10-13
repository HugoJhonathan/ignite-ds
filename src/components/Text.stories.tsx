import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'
import { disableTable } from './config'

export default {
    title: "Components/Text",
    component: Text,
    args: {
        children: 'Loren Ipsum',
        size: 'sm'
    },
    argTypes: {
        className: disableTable,
        asChield: disableTable
    }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
    args: {
        size: 'md'
    }
}
export const Large: StoryObj<TextProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChield: true,
        children: (
            <p>Text with p tag</p>
        )
    },
    argTypes: {
        children: disableTable,
    }
}