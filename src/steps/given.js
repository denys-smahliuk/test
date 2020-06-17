import { Given } from 'cucumber';

const { Selectors } = require('../support/Selectors and Variables/selectors.js');

Given(/^I open the home page$/, function () {
    browser.url(Selectors.homepage);
});
