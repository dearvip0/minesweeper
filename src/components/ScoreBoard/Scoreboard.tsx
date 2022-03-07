import styled from '@emotion/styled'
import React, { FC, ChangeEvent } from 'react'

import { Counter } from './Counter'
import { Level } from './Level'
import { Reset } from './Reset'

export interface ScoreboardProps {
   time: string
   levels: string[]
   /**
    * Default selected level
    */
   defaultLevel?: string
   onReset: () => void
   onChangeLevel: (event: ChangeEvent<HTMLSelectElement>) => void
   bombs: string
}

export const Scoreboard: FC<ScoreboardProps> = ({
   time,
   levels,
   bombs,
   onReset,
   onChangeLevel: onChange,
   defaultLevel,
}) => (
   <Wrapper>
      <Counter>{time}</Counter>
      <Level onChange={onChange} value={defaultLevel}>
         {levels}
      </Level>
      <Reset onReset={onReset} />
      <Counter>{bombs}</Counter>
   </Wrapper>
)

const Wrapper = styled.div`
   display: flex;
   width: 100%;
   justify-content: space-between;
`
