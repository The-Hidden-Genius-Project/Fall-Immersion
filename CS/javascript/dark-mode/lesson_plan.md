# Lesson Plan: Dark Mode Toggle

## **Duration:**
45 Minutes

## **Lesson Overview:**
-HTML
-JavaScript
-DOM Manipulation


## **Objectives:**
- [Objective 1]: Learn how to connect HTML files to JavaScript files
- [Objective 2]: Learn how to write a JavaScript function to toggle Dark Mode using a if/else statement
- [Objective 3]: Learn how to manipulate the DOM (Document Object Model) using JavaScript

## **Materials:**
- Visual Studio Code, Cursor
- Web browser (Chrome, Firefox, etc.)
- Live Server extension

## **Standards:**
- Basic HTML structure
- Basic JavaScript functions
- Basic DOM manipulation
- Basic CSS styling

## **Lesson Activity:**

### 1. **Introduction (Time: 5 minutes)**
   - **Objective:** Introduce the concept of dark mode and its importance in web design
   - Discuss the benefits of Dark Mode (reduced eye strain, energy savings on OLED screens)
   - Explain that we'll be creating a simple Dark Mode app using HTML and JavaScript

### 2. **HTML Structure (Time: 10 minutes)**
   - **Objective:** Create the basic HTML structure for the Dark Mode app
   - Open a new HTML file and add the basic HTML5 boilerplate
   - Add a title "Dark Mode Toggle" to the page
   - Create a button element with the text "Toggle Dark Mode"
   - Add an onclick attribute to the button that calls a function named darkMode()

### 3. **JavaScript Function (Time: 15 minutes)**
   - **Objective:** Write the JavaScript function to toggle dark mode
   - Create a new JavaScript file and link it to the HTML file
   - Write the darkMode() function:
     - Get the body element using document.body
     - Check the current background color
     - If it's black, change to light mode (white background, black text)
     - If it's not black, change to dark mode (black background, white text)
   - Explain each step of the function and how it manipulates the DOM

### 4. **Testing and Refinement (Time: 10 minutes)**
   - **Objective:** Test the dark mode toggle and make any necessary refinements
   - Open the HTML file in a web browser
   - Click the button to toggle between light and dark modes
   - Discuss any issues or improvements that could be made
   - Optional: Add additional elements to the page to see how they're affected by the toggle

### 5. **Closure (Time: 5 minutes)**
   - **Objective:** Summarize the key concepts learned and discuss potential extensions
   - Recap the main steps: HTML structure, JavaScript function, and DOM manipulation
   - Discuss potential improvements (e.g., saving user preference, adding transitions)
   - Encourage students to experiment with adding more elements or styles to the toggle

## **Assessment:**
- Students successfully create a working dark mode toggle
- Students can explain how the JavaScript function manipulates the DOM to change styles

## **Extra Activities:**
- Add a transition effect when toggling between modes
- Implement local storage to remember the user's preference
- Create a more complex dark mode that affects multiple elements differently

## **Reflection / Takeaways:**
After teaching the lesson, reflect on students' understanding of DOM manipulation and their ability to combine HTML and JavaScript functionality. Consider any challenges faced and how to address them in future lessons.
