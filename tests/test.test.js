'use strict';

const webfonts = require('../index');

test('should return test', () => {
    expect(webfonts.Webfonts()).toBe('Test Webfonts');
});
