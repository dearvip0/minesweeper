import { CellState, Field } from './Field';
import { incrementNeibours } from './CellsManipulator';

const { empty, bomb } = CellState;

describe('Check Increment Neibours', () => {
	describe('Simple cases', () => {
		it('Field with only one item', () => {
			expect(incrementNeibours([0, 0], [[bomb]])).toStrictEqual([[bomb]]);
		});
		it('Field 2x2 with one mine', () => {
			expect(
				incrementNeibours(
					[0, 0],
					[
						[bomb, empty],
						[empty, empty],
					]
				)
			).toStrictEqual([
				[bomb, 1],
				[1, 1],
			]);
		});
	});
});
