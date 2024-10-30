// Search functionality for filtering content
// document.getElementById('search-box').addEventListener('input', function() {
//     const searchQuery = this.value.toLowerCase();
//     const contentDiv = document.getElementById('markdown-content');
//     const headings = contentDiv.querySelectorAll('h1, h2, h3, h4, h5, h6, p');

//     headings.forEach(heading => {
//         const text = heading.textContent.toLowerCase();
//         if (text.includes(searchQuery)) {
//             heading.style.display = '';  // Show matching content
//         } else {
//             heading.style.display = 'none';  // Hide non-matching content
//         }
//     });
// });
document.getElementById('search-box').addEventListener('input', function() {
    const searchQuery = this.value.toLowerCase();
    const contentDiv = document.getElementById('markdown-content');
    const paragraphs = contentDiv.querySelectorAll('p, h1, h2, h3, h4');

    paragraphs.forEach(paragraph => {
        const text = paragraph.textContent.toLowerCase();
        if (text.includes(searchQuery)) {
            paragraph.style.display = '';  // Show matching content
        } else {
            paragraph.style.display = 'none';  // Hide non-matching content
        }
    });
});
