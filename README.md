# Calculator Application

## Overview

This is a simple calculator application built with HTML, CSS, and JavaScript. It allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division through an interactive interface.

## Features

- **Dynamic Button Inputs**: Users can click on buttons to input numbers and operators into the display.
- **Clear Functionality**: A clear button (`C`) resets the display to its initial state.
- **Result Calculation**: An equal button (`=`) evaluates the mathematical expression entered in the display and shows the result.
- **Error Handling**: Displays an error message if the input expression is invalid.

## Code Explanation

### HTML Elements Referenced

1. **Buttons**: Buttons with the class `.btn` represent the numeric and operator inputs.
2. **Equal Button**: Button with `id="equal"` evaluates the current expression.
3. **Clear Button**: Button with `id="clear"` clears the display.
4. **Display**: Element with `id="display"` shows the user’s input and results.

### JavaScript Functionality

1. **Adding Button Input to Display**
   ```javascript
   buttons.forEach(button => {
       button.addEventListener("click", () => {
           display.textContent += button.value;
       });
   });
   ```
   - Adds an event listener to all buttons with the class `.btn`.
   - Appends the `value` of the clicked button to the `display`.

2. **Clearing the Display**
   ```javascript
   clear.addEventListener("click", () => {
       display.textContent = "";
   });
   ```
   - Resets the `display` text content to an empty state when the clear button is clicked.

3. **Evaluating the Expression**
   ```javascript
   equal.addEventListener("click", () => {
       try {
           const expression = display.textContent;
           const result = eval(expression);
           display.textContent = result;
       } catch (error) {
           display.textContent = "Error";
       }
   });
   ```
   - Evaluates the mathematical expression in the `display`.
   - Shows the result or an `"Error"` message for invalid inputs.

### Error Handling

The `try-catch` block ensures that invalid mathematical expressions or syntax errors do not crash the application. Instead, an `"Error"` message is displayed in the `display`.

## Usage

1. Open the HTML file in a browser to load the calculator interface.
2. Click numeric and operator buttons to build an expression in the display.
3. Click the `=` button to evaluate the expression.
4. Click the `C` button to clear the display.

## Dependencies

This application does not require any external libraries or frameworks. It runs purely on native JavaScript, HTML, and CSS.
