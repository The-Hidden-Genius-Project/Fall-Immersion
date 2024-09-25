document.getElementById('myButton').addEventListener('click', function() {
    image = document.createElement('img');
    image.src = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';
    document.body.appendChild(image);
});