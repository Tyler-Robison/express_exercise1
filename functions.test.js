const { mean, median, mode } = require('./functions')

describe("Tests for mean, median and mode", function () {

    test('return mean', function () {
        let nums = [1, 2, 3, 4, 5]
        let nums2 = [-1, 0, 1, 2, 3, 0]
       
        expect(mean(nums)).toEqual(3);
        expect(mean(nums2)).toBeCloseTo(0.833);
    });

    test('return median', function () {
        let nums = [1, 2, 3, 4, 5]
        let nums2 = [-1, 0, 1, 2, 3, 4]
        expect(median(nums)).toEqual(3);
        expect(median(nums2)).toEqual(1.5);
    });

    test('return mode', function () {
        let nums = [1, 2, 2, 4, 5]
        let nums2 = [-1, -1, 0, 1, 2, 3, 4, 4]
        expect(mode(nums)).toEqual([2]);
        expect(mode(nums2)).toEqual([4, -1]);
    });

});