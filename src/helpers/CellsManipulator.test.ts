import { CellState, Field } from './Field'
import { incrementNeibours } from './CellsManipulator'

const { empty: e, hidden: h, bomb: b } = CellState

describe('Check Increment Neibours', () => {
   describe('Simple cases', () => {
      it('Field with only one item', () => {
         expect(incrementNeibours([0, 0], [[b]])).toStrictEqual([[b]])
      })
      it('Field 2x2 with one mine', () => {
         expect(
            incrementNeibours(
               [0, 0],
               [
                  [b, e],
                  [e, e],
               ],
            ),
         ).toStrictEqual([
            [b, 1],
            [1, 1],
         ])
      })
   })
})
