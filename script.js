document.getElementById('blog-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var blogContent = document.getElementById('blog-content').value;

    fetch('YOUR_BACKEND_ENDPOINT', {  // Replace with your actual backend endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content: blogContent }),
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('response-message').innerText = 'Blog submitted successfully!';
        document.getElementById('blog-content').value = '';  // Clear the text area
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
