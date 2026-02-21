// Function to include external HTML files
function includeHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}`);
            }
            return response.text();
        })
        .then(data => {
            const element = document.getElementById(elementId);
            if (element) {
                element.innerHTML = data;
            } else {
                console.warn(`Element with id '${elementId}' not found`);
            }
        })
        .catch(error => console.error('Error loading file:', error));
}

// Function to include header
function includeHeader() {
    includeHTML('header-container', 'header.html');
}

// Function to include footer
function includeFooter() {
    includeHTML('footer-container', 'footer.html');
}

// Function to include both header and footer
function includeHeaderFooter() {
    includeHeader();
    includeFooter();
}

// Auto-include when DOM is loaded (optional)
document.addEventListener('DOMContentLoaded', function() {
    // Uncomment the line below to auto-include header and footer on all pages
    includeHeaderFooter();
});
