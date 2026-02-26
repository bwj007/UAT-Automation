Feature: Login Functionality

  Scenario: Successful login
    Given I am on the login page
    When I enter username "tomsmith" and password "SuperSecretPassword!"
    Then I should see "You logged into a secure area!"

  Scenario Outline: Invalid login
    Given I am on the login page
    When I enter username "<username>" and password "<password>"
    Then I should see "<message>"

    Examples:
      | username | password             | message                    |
      | tomsmith | wrong                | Your password is invalid!  |
      | wrong    | SuperSecretPassword! | Your username is invalid!  |
      | wrong    | wrong                | Your username is invalid!  |