import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Reset, ResetButtonProps } from './Reset'

export default {
   title: 'Scoreboard/Reset',
   component: Reset,
} as Meta

const Template: Story<ResetButtonProps> = (args) => <Reset {...args} />

export const ResetExample = Template.bind({})
