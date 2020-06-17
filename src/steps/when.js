import waitForVisible from '../support/action/waitForDisplayed';

const { Selectors } = require('../support/Selectors and Variables/selectors.js');
const { When } = require('cucumber');

When(/^I enter valid new user credentials$/, function () {
    $(Selectors.registrarse)
        .click();

    let newEmail = new Date().getTime() + '@gmail.com';
    waitForVisible(Selectors.newEmailInput);
    $(Selectors.newEmailInput)
        .setValue(newEmail);
    $(Selectors.newEmailConfirmationInput)
        .setValue(newEmail);

    waitForVisible(Selectors.newPasswordInput);
    $(Selectors.newPasswordInput)
        .setValue(Selectors.password);

    $(Selectors.TermsAndConditions)
        .click();
    $(Selectors.registerSubmit)
        .click();
});

When(/^I click on the button Entrar$/, function () {
    $(Selectors.entrar)
        .click();
});

When(/^I enter registered email$/, function () {
    waitForVisible(Selectors.newEmailInput);
    $(Selectors.registeredEmailInput)
        .setValue(Selectors.registeredEmail);
});

When(/^I enter a valid password$/, function () {
    $(Selectors.registeredPasswordInput)
        .setValue(Selectors.registeredPassword);
});

When(/^I submit login credentials$/, function () {
    $(Selectors.loginSubmit)
        .click();
});

When(/^I do login$/, function () {
    $(Selectors.entrar)
        .click();
    waitForVisible(Selectors.registeredEmailInput);
    $(Selectors.registeredEmailInput)
        .setValue(Selectors.registeredEmail);
    $(Selectors.registeredPasswordInput)
        .setValue(Selectors.registeredPassword);
    $(Selectors.loginSubmit)
        .click();

});

When(/^I do search for a content$/, function () {
    waitForVisible(Selectors.userLogged);
    browser.pause(3000);
    $(Selectors.searchField)
        .setValue(Selectors.searchRequest);
    waitForVisible(Selectors.searchViewAllResultsButton);
    $(Selectors.searchViewAllResultsButton)
        .click();
    //browser.pause(2000);
    waitForVisible(Selectors.searchResult);
    //browser.pause(2000);
});
