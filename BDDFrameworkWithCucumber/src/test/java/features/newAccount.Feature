Feature: User should be able to add New Account

Scenario Outline: User should be able to add New Account

Given User is already in Login Page
When User enters "<username>" and "<password>"
When user clicks New Account
When user inputs "<accountTitle>" and "<description>" and "<balance>" 
And clicks submit
Then close the browser

Examples:
|username| password|accountTitle| description| balance|
|techfiosdemo@gmail.com|abc123| Fun| HappyTimes| 2000|