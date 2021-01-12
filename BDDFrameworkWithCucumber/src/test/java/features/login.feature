Feature: As a User  I want to login the website with my correct credentials.

Scenario Outline: User should be able to login, with correct credentials

Given User is already in Login Page
When User enters "<username>" and "<password>"
Then After login close the browser

Examples:
|username| password|
|demo@techfios.com|abc123|