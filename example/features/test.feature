Feature: Running Cucumber with Protractor
  As a user of Protractor
  I should be able to use Cucumber
  In order to run my E2E tests

  Scenario: Protractor and Cucumber Test
    Given I go to "https://uk.mycs.io"
    When I'm hover on "Personalize" in the header menu
    When I click on "Shelves"
    When I click on Change total size
    And I select height "271 cm"

