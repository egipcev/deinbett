Feature: User Signup And Login

    Scenario: User Signup with random user positive
        Given user opens main page
        When user signs up
        Then Register API response is 200
        And user is logged in

    Scenario: User login positive
        Given user opens main page
        When user logs in
        Then Login API response is 200
        And user is logged in

    Scenario Outline: User login negative
        Given user opens main page
        When user logs in with "<email>" and "<password>"
        # Then Login API response is <code>
        And email error message is "<emailMessage>"
        And password error message is "<passwordMessage>"

        Examples:
            | email         | password         | emailMessage                              | passwordMessage                                                                                                                                     |
            |               | Password_12345!# | Bitte gib Deine E-Mail-Adresse ein        |                                                                                                                                                     |
            | test@mail.com |                  |                                           | Bitte verwende ein Passwort von mindestes 8 Zeichen mit mindestens einem Kleinbuchstaben, einem Großbuchstaben, einer Zahl und einem Sonderzeichen. |
            | test@mail.com | 12345            |                                           | Bitte verwende ein Passwort von mindestes 8 Zeichen mit mindestens einem Kleinbuchstaben, einem Großbuchstaben, einer Zahl und einem Sonderzeichen. |
            |               |                  | Bitte gib Deine E-Mail-Adresse ein        | Bitte verwende ein Passwort von mindestes 8 Zeichen mit mindestens einem Kleinbuchstaben, einem Großbuchstaben, einer Zahl und einem Sonderzeichen. |
            | test          | Password_12345!# | Bitte gib eine gültige E-Mail-Adresse ein |                                                                                                                                                     |

    Scenario: User not existing login negative
        Given user opens main page
        When user logs in with "noexist_user@mail.com" and "Password_12345!#"
        Then Login API response is 404