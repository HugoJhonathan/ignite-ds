import { Meta, StoryObj } from '@storybook/react'
import { disableTable } from './config'
import { Heading, HeadingProps } from './Heading'

export default {
    title: "Components/Heading",
    component: Heading,
    args: {
        children: 'Heading',
        size: 'sm'
    },
    argTypes: {
        asChield: disableTable,
        className: disableTable,
    }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const Small: StoryObj<HeadingProps> = {
    args: {
        size: 'md'
    }
}
export const Large: StoryObj<HeadingProps> = {
    args: {
        size: 'lg'
    }
}

export const CustomComponent: StoryObj<HeadingProps> = {
    args: {
        asChield: true,
        children: (
            <h1>Heading</h1>
        )
    },
    argTypes: {
        children: disableTable,
        asChield: disableTable,
        className: disableTable,
    },
}