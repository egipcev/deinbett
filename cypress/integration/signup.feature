Feature: User Signup And Login

    Scenario: User Signup with random user positive
        Given user opens main page
        When user signs up
        Then Register API response is OK
        And user is logged in

    Scenario: User login positive
        Given user opens main page
        When user logs in
        Then Login API response is OK
        And user is logged in

