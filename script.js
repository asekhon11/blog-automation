document.getElementById('blogForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const blogContent = this.blogContent.value;
    fetch('http://127.0.0.1:5000/submit-blog', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ content: blogContent })
    }).then(response => response.json())
      .then(data => {
          // Handle response here
          alert('Blog submitted!');
      });
});
