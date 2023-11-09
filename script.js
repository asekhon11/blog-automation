document.getElementById('blogForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const blogContent = this.blogContent.value;
    fetch('https://a5d0-99-246-144-174.ngrok.io', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ content: blogContent })
    }).then(response => response.json())
      .then(data => {
          // Handle response here
          alert('Blog submitted!');
      });
});
