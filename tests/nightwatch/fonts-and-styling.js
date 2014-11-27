// add tests to this file using the Nightwatch.js API
// http://nightwatchjs.org/api

module.exports = {
  'Fonts and Styling' : function (client) {
    client
    .url('http://localhost:3000')

    .waitForElementVisible('body', 1000)
    .assert.cssClassPresent('#firstHelveticaFont', 'helveticas')
    .assert.cssClassPresent('#secondtHelveticaFont', 'colaborate-light')
    .assert.cssClassPresent('#thirdHelveticaFont', 'existence-light')
    .assert.cssClassPresent('#fourthHelveticaFont', 'print-clearly')
    .assert.cssClassPresent('#fifthHelveticaFont', 'quicksand-bold')
    .assert.cssClassPresent('#sixthHelveticaFont', 'quicksand-light')

    .assert.cssClassPresent('#firstHandwrittenFont', 'chalkdust')
    .assert.cssClassPresent('#secondHandwrittenFont', 'harabarahand')
    .assert.cssClassPresent('#thirdHandwrittenFont', 'itaintrocketscience')
    .assert.cssClassPresent('#fourthHandwrittenFont', 'shelterme')
    .assert.cssClassPresent('#fifthHandwrittenFont', 'wildscript')
    .assert.cssClassPresent('#sixthHandwrittenFont', 'windsong')

    .assert.cssClassPresent('#firstBarcodeFont', 'barcode')

    .assert.cssClassPresent('#firstCalligraphyFont', 'alexbrush')

    .assert.cssClassPresent('#firstPictographFont', 'pictographs')
    
    .end();
  }
};
