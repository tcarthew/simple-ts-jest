import { reverseValue, echoValue } from './utillities';

describe('utillites', () => {
    it('can reverse a value', () => {
        expect(reverseValue('abc')).toBe('cba');
    });

    it('can echoe value', () => {
        expect(echoValue('hiya')).toBe(`Echo: hiya`);
    });
});
