# CypressAutomation

Frontend Web Automation Testing Tool, 

To test modern web applications 

Doesn't use any selenium libraries

It is a Open Source 

Node.js comes with npm module

-----------------------------------

Who can use cypress - Dev & QA ?
-----------------------------------
End to End test cases 
Unit test case 
Integration tests 

API Testing can be done via Cypress 

Difference Between Selenium and Cypress

| Feature              | Selenium                                    | Cypress                                  |
|----------------------|---------------------------------------------|------------------------------------------|
| Application Support  | Only Web                                    | Web & API                                |
| Cost                 | Free                                        | Test Runner - Free, Dashboard - Paid     |
| Setup & Installation | Difficult                                   | Easier                                   |
| Languages            | Java, Python, Ruby, C#, JavaScript          | JavaScript, TypeScript                   |
| Browsers             | Chrome, Edge, Firefox, Safari, Opera, IE11  | Chrome, Edge, Firefox, Electron          |
| Frameworks Support   | JUnit, TestNG, PyTest, etc.                 | Mocha JS                                 |
| Performance          | Runs outside browser, slower                | Runs inside browser, faster              |
| Reporting            | Extent, Allure, etc.                        | Mocha reporters, Cypress dashboard       |


Main Feature of Cypress

Time Travel --> All the steps will be executed but the thing is Cypress will take the screenshot of all the steps executed 
Debuggability --> Cypress have the access to all the dev tools since it is running inside the browser 
Automatic Waits --> There is Async built in waits used in cypress 
Consistence --> Cypress is consistence on test results since it is running inside the browser
Screenshot and Videos --> Are captured inbuilt 
Cross Browser Testing --> locally and remotly with the CI/CD pipelines 

Limitations 

Cypress cant be used for the automation of window based and mobile based application 
Limited support of browser 
Language support --> JavaScript and TypeScript 
Third party reporting tool integration is also limited 


Environment Setup
--------------------------
1) Download & install Node.js

2) Download & install Visual Studio Code (VSCode)

3) Create a new folder for your project & open it in VSCode

4) Open cmd/terminal, then execute the below command:
   npm init -y
   ----> creates package.json file

5) To install Cypress, run:
   npm install cypress --save-dev

6) Start Cypress:
   npx cypress open
   (or)
   node_modules/.bin/cypress open
