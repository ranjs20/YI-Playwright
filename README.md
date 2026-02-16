🎭**Sauce Demo Playwright Automation**🎭
This is a comprehensive E2E testing suite for [Sauce Demo](https://www.saucedemo.com/), built for speed and reliability using Playwright.

**📜Introduction**
This repository contains the test files that automate login,cart and checkout functionalities of the app using Page Object Model(POM)

**🪛Tech Stack**
- Core:* [Playwright](https://playwright.dev/) (v1.40 or higher)
- Environment: Node.js
- Language:Javascript

**📄Prerequisites**
Before you begin , ensure you have this installed:
* [Node.js](https://nodejs.org/)

**⚙️Environment Setup**
Create a .env file in the project root and add following credentials
(this file is ignored by Git)
BASE_URL =target_url_here.com
SAUCE_PASSWORD =secret_password_here

**🏃Running Tests**
- **npx playwright test** -Runs all tests in Headless mode.
- **npx playwright test** --headed -Runs tests with the browser window visible

**📁Project Structure**
├── .github/workflows/    
├── tests/                
├── pages/               
├── utils/                
├── allure-results/       
├── playwright.config.js  
├── .gitignore            
├── package.json          
└── README.md  
