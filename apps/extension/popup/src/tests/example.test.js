// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { test, expect } from 'vitest';

function sum(a, b) {
    return a + b;
}

test('add 2 numbers', () => {
    expect(sum(2, 3)).toEqual(5);
});
