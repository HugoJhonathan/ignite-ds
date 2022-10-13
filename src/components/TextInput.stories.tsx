import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputInputProps, TextInputRootProps, TextInputIconProps } from './TextInput'
import { Envelope } from 'phosphor-react'
import { disableTable } from './config'

export default {
    title: "Components/TextInput",
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder='Type yout e-mail address' />
        ],
    },
    argTypes: {
        children: disableTable,
    }
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {
    argTypes: {

    }
}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: <TextInput.Input placeholder='Type yout e-mail address' />
    }
}