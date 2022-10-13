import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from './Button'
import { disableTable } from './config'

export default {
    title: "Components/Button",
    component: Button,
    args: {
        children: 'Loren Ipsum',
    },
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {
    argTypes: {
        asChield: disableTable,
    }
}