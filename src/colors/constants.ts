import { HexOpacity, OpacityLevel } from './types';

export const TRANSPARENT = '#0000';
export const DEFAULT = 'default';

/**
 * @group Colors
 *
 * A collection of HSL color ramps, each with 10 steps.
 *
 * Each array item is meant to map to a shade key from 900 (darkest) down to 50 (lightest).
 * Index 0 corresponds to shade 900, index 1 to shade 800, and so on, until index 9 corresponds to shade 50.
 *
 * For example:
 * - `hslArray[0]` => shade 900 (darkest)
 * - `hslArray[1]` => shade 800
 * - ...
 * - `hslArray[9]` => shade 50 (lightest)
 */
export const HSLColors = {
	neutral: [
		{ H: 220, S: 28, L: 8 },
		{ H: 220, S: 24, L: 14 },
		{ H: 220, S: 20, L: 18 },
		{ H: 220, S: 16, L: 24 },
		{ H: 220, S: 12, L: 34 },
		{ H: 220, S: 10, L: 46 },
		{ H: 220, S: 8, L: 60 },
		{ H: 220, S: 6, L: 74 },
		{ H: 220, S: 4, L: 88 },
		{ H: 220, S: 2, L: 98 },
	],
	red: [
		{ H: 342, S: 100, L: 10 },
		{ H: 342, S: 98, L: 14 },
		{ H: 342, S: 96, L: 26 },
		{ H: 342, S: 92, L: 42 },
		{ H: 342, S: 86, L: 58 },
		{ H: 342, S: 74, L: 64 },
		{ H: 342, S: 66, L: 76 },
		{ H: 342, S: 58, L: 84 },
		{ H: 342, S: 46, L: 90 },
		{ H: 342, S: 34, L: 96 },
	],
	green: [
		{ H: 154, S: 100, L: 10 },
		{ H: 154, S: 98, L: 14 },
		{ H: 154, S: 96, L: 26 },
		{ H: 154, S: 92, L: 42 },
		{ H: 154, S: 86, L: 58 },
		{ H: 154, S: 74, L: 64 },
		{ H: 154, S: 66, L: 76 },
		{ H: 154, S: 58, L: 84 },
		{ H: 154, S: 46, L: 90 },
		{ H: 154, S: 34, L: 96 },
	],
	yellow: [
		{ H: 36, S: 100, L: 10 },
		{ H: 36, S: 98, L: 14 },
		{ H: 36, S: 96, L: 26 },
		{ H: 36, S: 92, L: 42 },
		{ H: 36, S: 86, L: 58 },
		{ H: 36, S: 74, L: 64 },
		{ H: 36, S: 66, L: 76 },
		{ H: 36, S: 58, L: 84 },
		{ H: 36, S: 46, L: 90 },
		{ H: 36, S: 34, L: 96 },
	],
	blue: [
		{ H: 210, S: 100, L: 10 },
		{ H: 210, S: 98, L: 14 },
		{ H: 210, S: 96, L: 26 },
		{ H: 210, S: 92, L: 42 },
		{ H: 210, S: 86, L: 58 },
		{ H: 210, S: 74, L: 64 },
		{ H: 210, S: 66, L: 76 },
		{ H: 210, S: 58, L: 84 },
		{ H: 210, S: 46, L: 90 },
		{ H: 210, S: 34, L: 96 },
	],
	magenta: [
		{ H: 304, S: 100, L: 10 },
		{ H: 304, S: 98, L: 14 },
		{ H: 304, S: 96, L: 26 },
		{ H: 304, S: 92, L: 42 },
		{ H: 304, S: 86, L: 58 },
		{ H: 304, S: 74, L: 64 },
		{ H: 304, S: 66, L: 76 },
		{ H: 304, S: 58, L: 84 },
		{ H: 304, S: 46, L: 90 },
		{ H: 304, S: 34, L: 96 },
	],
	cyan: [
		{ H: 186, S: 100, L: 10 },
		{ H: 186, S: 98, L: 14 },
		{ H: 186, S: 96, L: 26 },
		{ H: 186, S: 92, L: 42 },
		{ H: 186, S: 86, L: 58 },
		{ H: 186, S: 74, L: 64 },
		{ H: 186, S: 66, L: 76 },
		{ H: 186, S: 58, L: 84 },
		{ H: 186, S: 46, L: 90 },
		{ H: 186, S: 34, L: 96 },
	],
	violet: [
		{ H: 264, S: 100, L: 10 },
		{ H: 264, S: 98, L: 14 },
		{ H: 264, S: 96, L: 26 },
		{ H: 264, S: 92, L: 42 },
		{ H: 264, S: 86, L: 58 },
		{ H: 264, S: 74, L: 64 },
		{ H: 264, S: 66, L: 76 },
		{ H: 264, S: 58, L: 84 },
		{ H: 264, S: 46, L: 90 },
		{ H: 264, S: 34, L: 96 },
	],
	orange: [
		{ H: 20, S: 100, L: 10 },
		{ H: 20, S: 98, L: 14 },
		{ H: 20, S: 96, L: 26 },
		{ H: 20, S: 92, L: 42 },
		{ H: 20, S: 86, L: 58 },
		{ H: 20, S: 74, L: 64 },
		{ H: 20, S: 66, L: 76 },
		{ H: 20, S: 58, L: 84 },
		{ H: 20, S: 46, L: 90 },
		{ H: 20, S: 34, L: 96 },
	],
};

export const opacityLevelMap = new Map<OpacityLevel, HexOpacity>(
	Object.entries({
		90: 'E6',
		80: 'CC',
		70: 'B3',
		60: '99',
		50: '80',
		40: '66',
		30: '4D',
		20: '33',
		10: '1A',
	}).map(([key, value]) => [Number(key) as OpacityLevel, value as HexOpacity]),
);
