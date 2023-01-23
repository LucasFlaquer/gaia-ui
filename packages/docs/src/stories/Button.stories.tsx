import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@gaia/react'

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {},
}
export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}