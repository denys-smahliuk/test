import waitForVisible from '../support/action/waitForDisplayed';

const { Then } = require('cucumber');
const { Selectors } = require('../support/Selectors and Variables/selectors.js');

Then(/^I successfully logged in$/, function () {
    waitForVisible(Selectors.userLogged);
    browser.pause(2000);
});

Then(/^I open the found content's details page$/, function () {
    $(Selectors.searchResult)
        .click();
    waitForVisible(Selectors.contentDetails);
    browser.pause(2000);
});

Then(/^I add content to wishlist$/, function () {
    $(Selectors.addToWishListButton)
        .click();
    waitForVisible(Selectors.addedToWishListButton);
    browser.url('https://rakuten.tv/wishlist');
    waitForVisible(Selectors.searchResult);
    $(Selectors.deleteFromWishListButton)
        .click(); //teardown
    browser.pause(2000);
});

Then(/^I logout$/, function () {
    browser.url(Selectors.logout);
});
