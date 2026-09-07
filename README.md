# Age Eligibility Checker

A production-grade, highly optimized frontend utility that categorizes user age groups based on explicit corporate business logic rules. This application features a hardened data-validation matrix engineered to intercept toxic inputs, layout breaking anomalies, and floating-point data states.

🔗 **[Live Demo Link](https://github.io)** *(Replace with your GitHub Pages link)*

## 🚀 Key Features

* **Harden Validation Architecture:** Implements a strict, 5-tier validation matrix to securely block empty strings, negative integers, zero values, floating-point decimals, and non-numeric system corruptors (`NaN`).
* **Optimized Evaluation Matrix:** Utilizes sequential top-down logical routing to eliminate operational redundancy and minimize CPU execution overhead.
* **Separation of Concerns:** Adheres to industry best practices by maintaining clean isolation between structure (HTML5), stylistic presentation (CSS3), and runtime logic processing (JavaScript ES6+).
* **Responsive Card UI:** Built with dynamic Flexbox rules to center and adapt gracefully across desktop and mobile screens without using fragile hardcoded heights.

## 🛠️ Tech Stack

* **Structure:** HTML5 (Semantic elements & accessible form tracking)
* **Styling:** CSS3 (Flexbox & Box-sizing optimization models)
* **Logic Engine:** Vanilla JavaScript (ES6+ Runtime Environment)

## 📊 Business Logic Matrix

The application's logic engine evaluates incoming values and assigns them to the following strict operational boundaries:

| Input Condition | Processing Path / Output Target |
| :--- | :--- |
| `""` / `x <= 0` / `> 120` / `NaN` / Decimals | Validation Guard Rail Intercept \rightarrow **Error Message** |
| `1` to `17` | **Minor** |
| `18` to `39` | **Adult** |
| `40` to `59` | **Middle-aged** |
| `60` to `69` | **Senior Citizen** |
| `70+` | **Elderly** |

## 📦 Local Installation & Setup

This repository contains completely vanilla source files and requires no complex build environments or external dependencies to run.

1. Clone the project locally:
   ```bash
   git clone https://github.com
   ```
2. Navigate into the application root:
   ```bash
   cd age-checker
   ```
3. Open `index.html` directly in any modern, compliant web browser.

## 🎓 Core Competencies Developed

Through this engineering sprint, I advanced my knowledge in:
* **DOM Query Isolation Pipelines:** Working with `document.querySelector` to accurately bind state inputs on target event fires.
* **Defensive Program Design:** Implementing sequential evaluation gates and early function exit terminations using `return`.
* **The NaN & Floating-Point Anomalies:** Debugging unique runtime type evaluations using built-in system hooks like `Number.isNaN()` and `Number.isInteger()`.
