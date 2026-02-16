# QA Automation Project for Login Testing

This project demonstrates a Manual & Automation QA Engineer with no coding background that uses GitHub Copilot as the primary coding assistant for testing login features of a web application using public demo sites. It includes UI testing with Selenium and Gherkin (Cucumber), API testing, test case management, bug tracking, and test reporting.

## Features

- **UI Testing**: Automated tests using Selenium WebDriver and Cucumber with Gherkin syntax on https://the-internet.herokuapp.com/login
- **API Testing**: Tests for login API endpoints using Axios and Mocha on https://dummyjson.com/auth/login
- **Test Case Management**: JSON file containing test cases with steps, test data, and execution details.
- **Bug Tracking**: JSON file for tracking bugs.
- **Reporting**: Allure reports for test results.

## Running Tests

1. Install dependencies:
   ```
   npm install
   ```

2. Run API tests (working):
   ```
   npm run test:api
   ```

3. Run UI tests (may require Chrome permissions on macOS):
   ```
   npm run test:ui
   ```
   - If ERR_CONNECTION_REFUSED occurs, ensure Chrome accessibility permissions are granted in System Settings > Privacy & Security > Accessibility (add Terminal).
   - Alternatively, the UI test code demonstrates automation structure for portfolio purposes.

4. Generate reports:
   ```
   npm run report
   ```

## Notes
- API tests are fully functional and demonstrate backend testing.
- UI tests showcase Selenium automation; connection issues are environmental and don't affect the code quality.
- Manual test run documented in `manual-test-run.md`.
- This project was built leveraging GitHub Copilot for coding assistance.

## Project Structure

- `tests/ui/`: UI test automation with Cucumber
- `tests/api/`: API test automation with Mocha
- `tests/test-cases.json`: Test case management
- `bugs/bugs.json`: Bug tracking
- `reports/`: Test reports

## Technologies Used

- JavaScript/Node.js
- Selenium WebDriver
- Cucumber/Gherkin
- Mocha/Chai
- Axios
- Allure Reporting