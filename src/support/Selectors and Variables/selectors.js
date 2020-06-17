const Selectors = {
    //Sign-In / Login
    homepage: "https://www.rakuten.tv",
    registrarse: "a[data-test-id='menu-desktop-register-link']",
    entrar: "a[data-test-id='menu-desktop-login-link']",
    registerSubmit: "//div[@class='card card--register']//div[@class='form__submit']",
    newEmailInput: "//div[@class='card card--register']//input[@name='email']",
    newEmailConfirmationInput: "//div[@class='card card--register']//input[@name='emailConfirmation']",
    newPasswordInput: "//div[@class='card card--register']//input[@name='password']",
    password: "Rakuten2020",
    TermsAndConditions: "[id='terms_check_register']",
    userLogged: "[class='nav__items__user nav__items__user--logged']",
    registeredEmailInput: "//div[@class='card card--login']//input[@name='email']",
    registeredPasswordInput: "//div[@class='card card--login']//input[@name='password']",
    registeredEmail: "denis.smagliuk@gmail.com",
    registeredPassword: "11111111",
    loginSubmit: "//div[@class='card card--login']//div[@class='form__submit']",
    logout: "https://rakuten.tv/api/logout",


    //search
    searchField: "[class='search__box__input']",
    searchRequest: "Titanic",
    searchViewAllResultsButton: "//li[contains(@class,'result--viewall')]",
    contentDetails: "[class='detail__info']",
    searchResult:"a[class='artwork']",

    //wishlist
    addToWishListButton: "//span[contains(@class,'round-action round-action--wishlist')]",
    addedToWishListButton: "//span[contains(@class,'round-action round-action--wishlist round-action--active')]",
    wishListButton: "//span[@class='icon__wishlist']",
    deleteFromWishListButton: "//span[@class='icon__close']",
}

module.exports = {Selectors};
