# QA Automation Portfolio: Login Testing (UI + API)

This repository demonstrates end-to-end QA automation for login workflows across UI and API layers using public demo sites. It includes UI testing with Selenium and Gherkin (Cucumber), API testing with Mocha/Chai and Axios, test case management, bug tracking, and reporting.

The project follows an AI-assisted engineering workflow with GitHub Copilot as the primary coding assistant. Test strategy, scenario design, assertion logic, and quality decisions are QA-driven.

## Features

- **UI Testing**: Automated login scenarios with Selenium WebDriver and Cucumber/Gherkin on https://the-internet.herokuapp.com/login
- **API Testing**: Positive and negative login validation using Axios with Mocha/Chai assertions on https://dummyjson.com/auth/login
- **Test Case Management**: Structured test artifacts in JSON with steps, data, and execution details
- **Bug Tracking**: Defect tracking artifacts captured in JSON
- **Reporting**: Allure result generation for execution evidence

## Impact

- Built coverage for **4 core login test cases** across UI and API (2 UI + 2 API) using a risk-based happy-path and negative-path strategy.
- Implemented **6 automated login checks per full run** (**4 UI example executions** from Gherkin + **2 API Mocha tests**).
- Achieved **100% API pass rate (2/2 tests passing)** with a latest local run time of **~1s**.
- Centralized QA artifacts into **4 structured test cases** and **0 currently logged defects**, keeping traceability clean for portfolio review.
- Produced a lightweight, review-ready repository at approximately **38 KB tracked source size** (excluding dependencies and generated outputs).
- Executed development through an AI-assisted workflow with GitHub Copilot as the primary coding assistant, while keeping test design and quality decisions QA-led.

## Running Tests

1. Install dependencies:
   ```
   npm install
   ```

2. Run API tests (working):
   ```
   npm run test:api
   ```

3. Run UI tests:
   ```
   npm run test:ui
   ```
   - Current local run status: 4 scenarios passed, 12 steps passed.

4. Generate reports:
   ```
   npm run report
   ```

## Portfolio Notes
- API tests are functional and demonstrate backend authentication validation patterns.
- UI automation demonstrates maintainable Selenium + Cucumber structure and currently runs successfully in this project setup.
- Manual execution evidence is documented in `manual-test-run.md`.
- Development used GitHub Copilot as the primary coding assistant within an AI-assisted QA workflow.

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