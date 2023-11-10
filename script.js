document.getElementById('blogForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const blogContent = this.blogContent.value;
    fetch('https://11ae-99-246-144-174.ngrok-free.app/submit-blog', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ content: blogContent })
    }).then(response => response.json())
      .then(data => {
          // Handle response here
          alert('Blog submitted!');
      }).catch(error => {
          // Handle any errors here
          console.error('Error:', error);
          alert('Failed to submit the blog');
      });
});
