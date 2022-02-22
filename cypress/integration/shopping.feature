Feature: Shopping

    Background:
        Given user opens main page

    Scenario: User adds items to wishlist
        When user signs up
        And user is logged in
        And user adds five items to wishlist
        Then 5 items are in wishlist

    Scenario: User adds items from wishlist to basket
        When user logs in
        And user is logged in
        And user adds items from wishlist to basket
        Then 5 items are in basket


