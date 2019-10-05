'use strict';

const sayTest = require('../index');

test('should return test', () => {
    expect(sayTest()).toBe('Test');
});
