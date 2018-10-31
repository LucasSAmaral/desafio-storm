// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.first')
      .assert.containsText('a', 'CONHEÇA A STORM')
      .assert.elementCount('img', 12)
      .click('.first .anchor')
      .waitForElementVisible('.news-desktop__article--title', 1000)
      .click('.second .anchor')
      .waitForElementVisible('.news-desktop__article--title', 1000)
      .click('.third .anchor')
      .waitForElementVisible('.news-desktop__article--title', 1000)
      .click('.fourth .anchor')
      .waitForElementVisible('.news-desktop__article--title', 1000)
      .click('.fifth .anchor')
      .waitForElementVisible('.contact-us__text', 1000)
      .end()
  }
}
