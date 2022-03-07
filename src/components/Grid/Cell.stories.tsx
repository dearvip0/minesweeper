import React, { FC } from 'react'
import styled from '@emotion/styled'

import { Cell, CellProps } from './Cell'
import { Meta, Story } from '@storybook/react'

export default {
   title: 'Grid/Cell',
   component: Cell,
   argTypes: {
      coords: { defaultValue: [1, 1] },
   },
} as Meta

const Template: Story<CellProps> = (args) => <Cell {...args} />

export const CellClosed = Template.bind({})
CellClosed.args = {
   children: 10,
}

export const CellsEmpty = Template.bind({})
CellsEmpty.args = {
   children: 0,
}

export const CellWithBomb = Template.bind({})
CellWithBomb.args = {
   children: 9,
}

export const CellWithFlag = Template.bind({})
CellWithFlag.args = {
   children: 11,
}

export const CellWeakFlag = Template.bind({})
CellWeakFlag.args = {
   children: 12,
}
