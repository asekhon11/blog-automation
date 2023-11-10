document.getElementById('blogForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const blogContent = this.blogContent.value;
    fetch('https://8654-99-246-144-174.ngrok-free.app/submit-blog', { // Ensure the URL is correct
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ content: blogContent })
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle response here
        alert('Blog submitted!');
    })
    .catch(error => {
        // Handle errors here
        console.error('There has been a problem with your fetch operation:', error);
        alert('Error submitting blog!');
    });
});
