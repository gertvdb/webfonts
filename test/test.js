'use strict';

var expect = require('chai').expect;
var test = require('../index');

describe('#test', function() {
    it('should return test', function() {
        var result = test();
        expect(result).to.equal('Test');
    });
});
