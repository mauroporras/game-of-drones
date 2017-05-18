module.exports = {
  'Start a match': function (browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 1000)
      .setValue('input#player1-name', 'foo')
      .setValue('input#player2-name', 'bar')
      .click('button.Button')
      .pause(1000)
      .assert.containsText('h2.SecondaryTitle', 'Match in Progress')
      .end();
  }
};
