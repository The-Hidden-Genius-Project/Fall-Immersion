

---

## **Lesson: Introduction to Flask and Python for Web Development**

### **Session Duration**
- **60-90 minutes** (adjust based on your schedule)

---

### **Session Objective**
By the end of the session, students will understand the basics of Flask, a Python web framework, and will create a simple web application to learn about routing, templates, and rendering data in a browser.

---

### **Materials Needed**
- Computers with Python installed
- Text editor (VS Code, PyCharm, or similar)
- Projector/whiteboard
- Sample code snippets
- Internet access (for live coding and troubleshooting)
- Flask documentation (optional, for reference)

---

### **Lesson Plan Outline**

1. **Introduction to Flask and Web Development** (10-15 minutes)
   - **Warm-Up Discussion**: Briefly discuss how websites work, covering the client-server model and the role of web frameworks in simplifying web development.
   - **Lecture**: Introduce Flask as a lightweight web framework for Python. Explain why developers might choose Flask for building small to medium-sized web applications, highlighting its simplicity and flexibility.

---

2. **Setting Up Flask** (15-20 minutes)
   - **Demo**: Guide students through installing Flask. Use a virtual environment for dependency management, demonstrating best practices.
   - **Code Sample**: Install Flask and set up a basic Flask project:
     ```bash
     # Create and activate a virtual environment (optional but recommended)
     python3 -m venv venv
     source venv/bin/activate  # On Windows, use venv\Scripts\activate

     # Install Flask
     pip install Flask
     ```

   - **Hands-On Activity**: Ensure students have Flask installed and create a new Python file (e.g., `app.py`) as the main file for their web app.

---

3. **Creating the First Flask Application** (25-30 minutes)
   - **Demo**: Write a simple Flask app to demonstrate creating routes and handling requests. Explain how routes map URLs to functions, which return the content displayed on the webpage.
   - **Code Sample**:
     ```python
     from flask import Flask

     app = Flask(__name__)

     @app.route('/')
     def home():
         return "Hello, Flask!"

     if __name__ == '__main__':
         app.run(debug=True)
     ```
   - **Explanation**: Explain the code step-by-step, covering `@app.route` (the route decorator), the function that handles requests, and `app.run(debug=True)` to run the app with debugging enabled.
   - **Guided Practice**: Have students create a new route, such as `/about`, that displays “About Page.”

---

4. **Working with HTML Templates** (25-30 minutes)
   - **Lecture**: Introduce the concept of HTML templates and explain how Flask’s Jinja templating engine allows us to render dynamic content.
   - **Demo**: Create a `templates` folder and add an HTML file to it, then render this template in the Flask app.
   - **Code Sample**:
     ```python
     # app.py
     from flask import Flask, render_template

     app = Flask(__name__)

     @app.route('/')
     def home():
         return render_template('home.html')

     @app.route('/about')
     def about():
         return render_template('about.html')

     if __name__ == '__main__':
         app.run(debug=True)
     ```

     ```html
     <!-- templates/home.html -->
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Home</title>
     </head>
     <body>
         <h1>Welcome to Flask</h1>
         <p>This is the home page.</p>
     </body>
     </html>
     ```

     ```html
     <!-- templates/about.html -->
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>About</title>
     </head>
     <body>
         <h1>About Us</h1>
         <p>This is the about page.</p>
     </body>
     </html>
     ```
   - **Hands-On Activity**: Have students create an additional HTML page and link it to a new route in `app.py`.

---

5. **Using Dynamic Data in Templates** (20-25 minutes)
   - **Lecture**: Explain how to pass dynamic data from the Flask app to the template using context variables.
   - **Demo**: Modify the route to pass a variable to the template, then display this variable within the HTML using Jinja syntax.
   - **Code Sample**:
     ```python
     @app.route('/user/<name>')
     def user(name):
         return render_template('user.html', name=name)
     ```

     ```html
     <!-- templates/user.html -->
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>User</title>
     </head>
     <body>
         <h1>Hello, {{ name }}!</h1>
         <p>Welcome to your profile page.</p>
     </body>
     </html>
     ```
   - **Explanation**: Show students how `{{ name }}` pulls in the variable passed from the Flask route.
   - **Hands-On Activity**: Ask students to create a route that takes a different variable (e.g., a favorite color) and displays a personalized message on the page.

---

6. **Wrap-Up & Homework Assignment** (10-15 minutes)
   - **Recap Key Concepts**: Review the main topics, including setting up Flask, creating routes, using templates, and passing dynamic data to templates.
   - **Q&A Session**: Address any questions and provide troubleshooting assistance.
   - **Homework**: Help students think about how this will be used with their existing business project in addition to bootstrap

---

### **Assessment & Reflection**
- **Class Participation**: Check for active engagement during live coding and discussions.
- **Homework Review**: Evaluate students’ Flask projects in the following session to ensure they understand the core concepts of Flask and templating.
- **Reflection**: Ask students to write a brief note about their experience with Flask, any challenges they faced, and what they’d like to explore further in web development.

### **Resources**
- **Documentation**: 
  - Flask Official Documentation (https://flask.palletsprojects.com/)
  - Jinja Templating Documentation (https://jinja.palletsprojects.com/)
- **Tools**: Flask, Python, virtual environments
- **Additional Help**: Links to Flask tutorials or forums for extra support.

---

This session provides a solid foundation in Flask and Python, preparing students to build dynamic web applications with routes, templates, and dynamic data.
