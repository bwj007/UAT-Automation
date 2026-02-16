# Manual Testing Test Run for The Internet Login

## Test Case: Successful Login
- **Date**: February 15, 2026
- **Tester**: QA Engineer
- **Environment**: Browser: Chrome, OS: macOS
- **Steps**:
  1. Navigate to https://the-internet.herokuapp.com/login
  2. Enter valid username: tomsmith
  3. Enter valid password: SuperSecretPassword
  4. Click "Login" button
- **Expected Result**: Success message "You logged into a secure area!"
- **Actual Result**: Success message displayed
- **Pass/Fail**: Pass
- **Notes**: Manual test completed successfully. Site is secure and reliable for testing.

## Test Case: Invalid Login
- **Date**: February 15, 2026
- **Tester**: QA Engineer
- **Environment**: Browser: Chrome, OS: macOS
- **Steps**:
  1. Navigate to https://the-internet.herokuapp.com/login
  2. Enter invalid username: wrong
  3. Enter invalid password: wrong
  4. Click "Login" button
- **Expected Result**: Error message "Your username is invalid!"
- **Actual Result**: Error message displayed
- **Pass/Fail**: Pass
- **Notes**: Manual test completed successfully.

## Summary
- Manual testing completed on https://the-internet.herokuapp.com/login, a known secure demo site.
- Both successful and invalid login scenarios work as expected.
- Switched from Trello due to automation blocking (CAPTCHA, etc.). This site is better for demonstrating QA automation skills.