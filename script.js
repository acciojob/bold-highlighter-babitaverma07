// Function to change the color of all bold text to green
function highlight() {
    // Select all <strong> elements in the document
    const boldElements = document.querySelectorAll('strong');
    // Iterate over each <strong> element and change its color to green
    boldElements.forEach(element => {
        element.style.color = 'green';
    });
}

// Function to revert the color of all bold text back to black
function return_normal() {
    // Select all <strong> elements in the document
    const boldElements = document.querySelectorAll('strong');
    // Iterate over each <strong> element and revert its color to black
    boldElements.forEach(element => {
        element.style.color = 'black';
    });
}

// Wait for the DOM to fully load before attaching event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Select the link element by its ID
    const link = document.getElementById('highlight-link');

    // Attach the highlight function to the mouseover event of the link
    link.addEventListener('mouseover', highlight);
    // Attach the return_normal function to the mouseout event of the link
    link.addEventListener('mouseout', return_normal);
});
