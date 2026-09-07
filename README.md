# Simple Age Checker Website

This is a basic website that tells you if you are a minor, an adult, middle-aged, a senior citizen, or elderly based on the age you type in. 

I built this project to learn how HTML, CSS, and JavaScript work together. It also checks for mistakes (like blank inputs, negative numbers, or text) so the website won't break.

🔗 **[Live Demo Link](https://sandipbeghaa.github.io/age-checker/)** 

## ✨ Features

* **Checks for Errors:** If you type text, leave it blank, or enter a negative number, the website will tell you to enter a valid age.
* **Smart Choices:** The code uses simple rules to group your age correctly.
* **Clean Code:** Keeps HTML (structure), CSS (looks), and JavaScript (brain) in separate files.
* **Easy to Look At:** The box is centered on the screen and looks clean on both laptops and phones.

## 🛠️ Built With

* **HTML5:** For the page boxes, text, and button.
* **CSS3:** For colors, fonts, and centering the box.
* **JavaScript:** For doing the math and changing the text on the screen.

## 📊 The Age Rules

Here is how the website groups the numbers you type:

* **0 or lower / Text / Blank:** Shows an error message.
* **1 to 17:** "You are a Minor."
* **18 to 39:** "You are an Adult."
* **40 to 59:** "You are Middle-aged."
* **60 to 69:** "You are a Senior citizen."
* **70 or older:** "You are Elderly."

## 💻 How to Run It on Your Computer

1. Download these project files to your computer.
2. Double-click the `index.html` file.
3. It will open instantly in your web browser! No installation needed.

## 🧠 What I Learned From This Project

* How to use `document.querySelector` to find HTML boxes from JavaScript.
* How to use `addEventListener` to run code only when a button is clicked.
* How to use `if` and `else` to make decisions in code.
* How to catch input errors before they break the math.