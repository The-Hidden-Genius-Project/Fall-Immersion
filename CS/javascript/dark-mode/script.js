function darkMode() {
    
    // Get the body element
    const body = document.body;

    // Write the code to toggle dark mode below, [HINT: use the style property of the body element]
    if (body.style.backgroundColor === 'black') {
        // If it's black, change to light mode
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
    } else {
        // If it's not black, change to dark mode
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
    }

}