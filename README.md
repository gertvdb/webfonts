Webfonts
=========

A small library parses a json file to webfont objects that can be used in Javascript or Css.

## Installation

  `npm install @gertvdb/webfonts`

## Usage

    var webfonts = require('@gertvdb/webfonts').Webfonts;
    var scssParser = require('@gertvdb/webfonts').ScssParser;
    
    var webfonts = webfonts('../fonts/fonts.config.json');
    webfonts.export('../fonts', ScssParser)

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
