# 🧪 Cypress Cucumber Test Automation Framework

This project demonstrates end-to-end UI test automation using **Cypress** with the **Cucumber BDD** approach. It automates the **SauceDemo.com** website covering login, add-to-cart functionality, and the full checkout flow.

---

## 📁 Project Structure

cypress/
├── e2e/
│ ├── login.feature
│ ├── add-to-cart.feature
│ └── checkout.feature
├── support/
│ └── step_definitions/
│ ├── loginSteps.js
│ ├── addToCartSteps.js
│ ├── checkoutSteps.js
│ └── commonSteps.js

---

## ✅ Features & Scenarios

### 🔐 Login Feature

- Login with valid credentials
- Login with invalid credentials

### 🛒 Add to Cart Feature

- Add a product from the products page
- Add a product from the product overview page
- Remove a product from the cart

### 💳 Checkout Feature

- Complete the full checkout process
- Attempt to checkout without filling in mandatory fields

---

## 🧩 Technologies Used

- [Cypress](https://www.cypress.io/)
- [Cucumber (BDD)](https://github.com/badeball/cypress-cucumber-preprocessor)
- JavaScript
- Mochawesome (for reports)

---

## 🚀 How to Run the Tests

### 1. 📦 Install dependencies

```bash
npm install
```

### 2. ▶️ Run tests in headless mode

To run the tests in headless mode, use the following command:

```bash
npx cypress run
```

### 3. 🧪 Run tests in interactive mode

To run the tests in interactive mode using Chrome, run:

```bash
npx cypress open --browser chrome
```

---

## 📊 Generate Test Reports

This project uses **Mochawesome** to generate HTML test reports for better visibility of test execution results.

### 🧰 Prerequisites

Make sure you have the following dependencies installed:

```bash
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
```

### 🧪 Run Tests with Report Generation

```bash
npx cypress run
```

### 🔍 View the report:

```
Cypress/Reports/index.html
```
