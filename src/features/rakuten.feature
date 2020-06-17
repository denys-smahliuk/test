Feature: Rakuten

    Scenario: Login
        Given I open the home page
        When I do login
        Then I successfully logged in
        And I logout

    Scenario: Sign In
        Given I open the home page
        When I enter valid new user credentials
        Then I successfully logged in
        And I logout

    Scenario: Search content & check content detail page
        Given I open the home page
        And I do login
        When I do search for a content
        Then I open the found content's details page
        And I logout

    Scenario: Add content to wishlist.
        Given I open the home page
        And I do login
        When I do search for a content
        And I open the found content's details page
        Then I add content to wishlist
        And I logout
