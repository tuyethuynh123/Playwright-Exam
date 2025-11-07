# Playwright Automation Testing Project

## 1.Overview
This project automates functional testing for the website https://practice.automationtesting.in/ using   
This file is designed to demonstrate automated web testing capabilities, including How to setup environment to execute single/multiple tests, serial/parallel execution, set up develop environment.
---
## 1. Clone the Repository - download the project from GitHub: 
run:
git clone https://github.com/tuyethuynh123/Playwright-Exam.git
cd Exam-Playwrite

## 2. Install all required packages (Playwright and others):
run: npm install

## 3. Install Playwright Browsers
run: npx playwright install

## 4. Run a Single Test
run: npx playwright test tests/example.spec.ts
Replace tests/example.spec.ts with the path to the test you want to run.
Example
npx playwright test tests/TC01_Home_Page_with_three_Sliders_only.test.ts

By default, the test runs headless (without opening a browser window).
If you want to see the browser while the test runs:
npx playwright test tests/example.spec.ts --headed

## 5. Run All Tests
run: npx playwright test

## 6. Run Tests in Parallel
run: npx playwright test --workers=2

## 7. Run Tests Sequentially
run: npx playwright test --workers=1

## 8. Viewing Reports
run: npx playwright show-report

## 9. Developer Mode
run: npx playwright test --debug

## 10. Run Specific Test via npm Scripts
You can also execute tests using npm scripts defined in package.json:
+ Runs TC_02_Verify_Product_Search_Functionality_Works in headed mode: npm run tc01
+ Runs TC_03_Verify_Main_Menu_Categories_Navigate_Correctly in headed mode: npm run tc02
+ Runs all tests in headed mode: npm run test:all
This approach makes it easier to run specific test cases without typing the full Playwright command each time.



