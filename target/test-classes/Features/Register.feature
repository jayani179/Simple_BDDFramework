Feature: NopCommerce Login
  Background:
    Given user able to open Browser
    And enter an Url


# Simple Hard coded scenario.
  Scenario Outline:Nopcommerce Valid Registration Test
    When User click on Register Link
    Then user verify registration page
    Then Select gender
    Then Enter "<firstname>","<lastname>","<email>","<password>" and "<confirmPassword>"
    Then Click on register button
    And user close the browser
    Examples:
      | firstname|lastname|email|password|confirmPassword|
      | abcd2|xyz|abcd2@gmail.com|Test@123|Test@123|
      | abcd3|xyz|abcd3@gmail.com|Test@123|Test@123|
      | abcd4|xyz|abcd4@gmail.com|Test@123|Test@123|


