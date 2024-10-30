function loadMarkdown(file) {
    const contentDiv = document.getElementById('markdown-content');

    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            const converter = new showdown.Converter();
            const htmlContent = converter.makeHtml(data);
            contentDiv.innerHTML = htmlContent;  // Only the content area is updated
        })
        .catch(err => console.error('Error loading markdown file:', err));
}

// Attach event listeners to sidebar links
document.querySelectorAll('#sidebar ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent default link behavior

        // Remove 'active' class from all links and add it to the clicked link
        document.querySelectorAll('#sidebar ul li a').forEach(a => a.classList.remove('active'));
        this.classList.add('active');

        const file = this.getAttribute('href');
        loadMarkdown(file);  // Load the markdown file dynamically
    });
});

// Load the default page on page load
window.addEventListener('load', () => {
    loadMarkdown('markdown/introduction.md');  // Load default content
});