// Function to load markdown content into the main section
function loadMarkdown(file) {
    const contentDiv = document.getElementById('markdown-content');

    fetch(file)
        .then(response => response.text())
        .then(data => {
            // Convert Markdown to HTML (use a library like marked.js or showdown.js)
            const htmlContent = marked(data);
            contentDiv.innerHTML = htmlContent;
        })
        .catch(err => console.error('Error loading markdown file:', err));
}

// Attach event listeners to sidebar links
document.querySelectorAll('#sidebar a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default link behavior
        const file = this.getAttribute('href');
        loadMarkdown(file);  // Load the markdown file dynamically
    });
});

// Load the default page on page load
window.addEventListener('load', () => {
    loadMarkdown('markdown/introduction.md');  // Load default content
});
