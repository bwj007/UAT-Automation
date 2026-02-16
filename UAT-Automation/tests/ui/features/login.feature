Feature: Login Functionality

  Scenario: Successful login
    Given I am on the login page
    When I enter username "tomsmith" and password "SuperSecretPassword"
    Then I should see "You logged into a secure area!"

  Scenario Outline: Invalid login
    Given I am on the login page
    When I enter username "<username>" and password "<password>"
    Then I should see "Your username is invalid!"

    Examples:
      | username | password |
      | tomsmith | wrong    |
      | wrong    | SuperSecretPassword |
      | wrong    | wrong    |