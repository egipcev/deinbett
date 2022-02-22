Feature: User Signup And Login

    Background:
        Given user opens main page

    Scenario: User Signup with random user positive
        When user signs up
        Then Register API response is 200
        And user is logged in

    Scenario: User login positive
        When user logs in
        Then Login API response is 200
        And user is logged in

    Scenario Outline: User login negative
        When user logs in with "<email>" and "<password>"
        Then email error message is "<emailMessage>"
        And password error message is "<passwordMessage>"
        And Login API response is <code>

        Examples:
            | email                 | password         | emailMessage                                      | passwordMessage                                                                                                                                     | code |
            |                       | Password_12345!# | Bitte gib Deine E-Mail-Adresse ein                |                                                                                                                                                     | 0    |
            | test@mail.com         |                  |                                                   | Bitte verwende ein Passwort von mindestes 8 Zeichen mit mindestens einem Kleinbuchstaben, einem Großbuchstaben, einer Zahl und einem Sonderzeichen. | 0    |
            | test@mail.com         | 12345            | Benutzername nicht gefunden oder Passwort falsch. |                                                                                                                                                     | 400  |
            |                       |                  | Bitte gib Deine E-Mail-Adresse ein                | Bitte verwende ein Passwort von mindestes 8 Zeichen mit mindestens einem Kleinbuchstaben, einem Großbuchstaben, einer Zahl und einem Sonderzeichen. | 0    |
            | test                  | Password_12345!# | Bitte gib eine gültige E-Mail-Adresse ein         |                                                                                                                                                     | 0    |
            | noexist_user@mail.com | Password_12345!# | Benutzername nicht gefunden oder Passwort falsch. |                                                                                                                                                     | 404  |
