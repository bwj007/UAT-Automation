# Copilot Instructions for QA Automation Project

## Project Overview
This is a QA automation portfolio project demonstrating login testing for UI and API endpoints. Built with Selenium (UI), Mocha/Chai (API), Cucumber/Gherkin (BDD), and Axios (HTTP client).

**Repository**: https://github.com/bwj007/UAT-Automation

## When to Use Copilot

Use Copilot assistance for:
- **Writing test steps** in `tests/ui/step_definitions/login-steps.js` (Selenium code)
- **Creating API tests** in `tests/api/api-tests.js` (Mocha/Chai patterns)
- **Writing Gherkin scenarios** in `tests/ui/features/login.feature` (BDD syntax)
- **Debugging test failures** (error analysis and troubleshooting)
- **Documentation** (README, comments, test descriptions)
- **Git operations** (commands, workflows, resolving conflicts)

## Technology Stack
- **JavaScript/Node.js**: Runtime
- **Selenium WebDriver**: UI automation (Chrome)
- **Cucumber/Gherkin**: BDD test scenarios
- **Mocha**: Test framework
- **Chai**: Assertion library
- **Axios**: HTTP client for API calls

## Development Workflow

### Setup
```bash
npm install                    # Install dependencies (do once)
```

### Running Tests
```bash
npm run test:api              # Run API tests (WORKING - 2/2 passing)
npm run test:ui               # Run UI tests (environmental considerations on macOS)
npm run test                  # Run all Cucumber tests
```

### Testing Notes
- **API tests**: Fully functional, tests ValidLogin and InvalidLogin scenarios
- **UI tests**: Code is correct; Chrome headless disabled due to macOS permissions
- **Test sites**: the-internet.herokuapp.com (UI), dummyjson.com (API)

## Code Standards

### UI Tests (Selenium)
- Use `tests/ui/step_definitions/login-steps.js` as reference for WebDriver patterns
- Follow Given-When-Then structure in step definitions
- Use `driver.get()`, `driver.findElement()`, `driver.wait()` for Selenium operations

### API Tests (Mocha/Chai)
- Use `tests/api/api-tests.js` as reference pattern
- Use `axios.post()` for API calls
- Use `expect()` from Chai for assertions
- Handle errors with try-catch blocks

### Gherkin Scenarios
- Keep scenarios in `tests/ui/features/login.feature`
- Use simple, clear Given-When-Then syntax
- Reference scenarios in step definitions

## Project Structure
```
tests/ui/              # UI tests with Selenium
tests/api/             # API tests with Mocha
tests/test-cases.json  # Test case management data
bugs/bugs.json         # Bug tracking
manual-test-run.md     # Manual testing documentation
```

## Error Handling Expectations

When errors or issues occur:
1. **Explain the error** - Describe what the error message means
2. **Identify the cause** - Explain why the error is happening
3. **Provide resolution** - Give step-by-step instructions to fix it
4. **Include examples** - Show code examples or terminal commands when helpful
5. **Prevent future issues** - Suggest ways to avoid similar errors

Example format: "`Error: [error type]` → [explanation] → [root cause] → [steps to resolve] → [prevention tips]"

## Before You Ask Copilot

1. **Check COPILOT_CONTEXT.md** for complete project details, test results, and commands
2. **Test locally** with `npm run test:api` or `npm run test:ui`
3. **Review existing code** in step_definitions or api-tests.js for patterns
4. **Document changes** in comments for clarity

## Git Workflow
```bash
git status                     # Check changes
git add .                      # Stage files (respects .gitignore)
git commit -m "message"        # Commit changes
git push origin main           # Push to GitHub
```

## Common Issues & Solutions

**ERR_CONNECTION_REFUSED in UI tests**
- Headless mode is disabled in login-steps.js
- This is a macOS environmental limitation, not a code issue
- Tests still showcase Selenium automation structure

**npm command not found**
- Add Node.js to PATH: `export PATH=$PATH:~/repos/UAT-Automation/node-v20.11.0-darwin-x64/bin`

**Large file push errors**
- .gitignore excludes: node_modules/, allure-results/, reports/, .tar.gz files
- Only necessary files are committed

## Code Quality Principles

- **Keep tests focused**: One scenario per test case
- **Use clear naming**: Test names should describe what they test
- **Handle errors gracefully**: Use try-catch in async operations
- **Document test data**: Use comments to explain credentials and test scenarios
- **Follow patterns**: Reference existing code for style consistency

## Performance Expectations

- **API tests**: ~450ms execution time
- **UI tests**: Varies based on browser launch and interaction delays
- **Test data**: Located in test files and test-cases.json

## References for Copilot

When asking Copilot:
- Reference file paths: `tests/ui/step_definitions/login-steps.js`
- Describe what you're testing: "Add a test for invalid password scenario"
- Provide context: "Using Selenium WebDriver and Mocha"
- Ask for examples: "Show me how to use Chai assertions for API response"

---

**Last Updated**: February 16, 2026
**Project Status**: Ready for production use and LinkedIn portfolio
**Questions**: Refer to COPILOT_CONTEXT.md for detailed project information