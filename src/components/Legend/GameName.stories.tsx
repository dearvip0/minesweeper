/* eslint-disable storybook/story-exports */
import React from 'react'
import { Story, Meta } from '@storybook/react'

import { GameName, GameNameProps } from './GameName'

export default {
   title: 'Legend/GameName',
   component: GameName,
} as Meta

const Template: Story<GameNameProps> = (args) => <GameName {...args} />

export const MinesweeperGameName = Template.bind({})
MinesweeperGameName.args = {
   children: 'minesweeper',
}
