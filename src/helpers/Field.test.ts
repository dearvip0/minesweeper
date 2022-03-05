import { emptyFieldGenerator, CellState, fieldGenerator } from './Field';

const { empty, bomb, hidden } = CellState;
describe('Field Generator', () => {
	describe('emptyFieldGenerator tests', () => {
		it('2x2', () => {
			expect(emptyFieldGenerator(2)).toEqual([
				[empty, empty],
				[empty, empty],
			]);
		});
		it('3x3', () =>
			expect(emptyFieldGenerator(3)).toStrictEqual([
				[empty, empty, empty],
				[empty, empty, empty],
				[empty, empty, empty],
			]));
		it('3x3 with hidden state', () =>
			expect(emptyFieldGenerator(3, hidden)).toStrictEqual([
				[hidden, hidden, hidden],
				[hidden, hidden, hidden],
				[hidden, hidden, hidden],
			]));
	});
	describe('Simple cases', () => {
		it('Wrong dencity', () => {
			const errorText = 'Dencity must be between 0 and 1';
			expect(() => fieldGenerator(1, -1)).toThrow(errorText);
		});
		it('Smallest possible without mine', () => {
			expect(fieldGenerator(1, 0)).toStrictEqual([[empty]]);
		});
		it('Big field with mine', () => {
			expect(fieldGenerator(10, 0)).toStrictEqual([
				[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
				[empty, empty, empty, empty, empty, empty, empty, empty, empty, empty],
			]);
		});
		it('2x2 field with mines', () => {
			expect(fieldGenerator(2, 1)).toStrictEqual([
				[bomb, bomb],
				[bomb, bomb],
			]);
		});
	});
});
