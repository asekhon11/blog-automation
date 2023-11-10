document.getElementById('blogForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const blogContent = this.blogContent.value;
    console.log("Submitting blog content:", blogContent); // Log the content being submitted

    fetch('https://11ae-99-246-144-174.ngrok-free.app/submit-blog', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ content: blogContent })
    })
    .then(response => {
        console.log("Response received:", response);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Data received:", data);
        alert('Blog submitted!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to submit blog. Check console for details.');
    });
});
