localStorage.setItem("Data", "QuickSort");
document.cookie = "Data = Dijkstra; expires = Thu, 18 Dec 2025 12:00:00 UTC; path=/";

// Function to create a clickable area
function createClickableArea(id) {
    const area = document.createElement('div');
    area.id = id;
    area.style.position = 'absolute';
    area.style.width = '50px';
    area.style.height = '50px';
    area.style.borderRadius = '50%';
    area.style.cursor = 'grab';
    area.style.top = Math.random() * 90 + 'vh';
    area.style.left = Math.random() * 90 + 'vw';
    area.onclick = function() {
        alert('You clicked on area ' + id);
    };
    document.getElementById('cabl-3nwy9w4cl').appendChild(area);
}

// Create 5 clickable areas
for (let i = 1; i <= 5; i++) {
    createClickableArea('cabl-3nwy9w4cl-' + Math.random().toString(36).substr(2, 9));
}

// Function to fetch API data
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
            method: 'GET',
        });
    } catch (error) {
        console.log("");
    }
}

// Fetch data on page load
document.addEventListener('DOMContentLoaded', fetchData);


// Clues in Title tag & Meta tag → for redirection
// HTML , JS Comments → for redirection
// Console logging → for redirection
// Query String → for redirection

// Cookies
// Local Storage
// Input Tag– hidden
// CSS Hiding → (bg color, text size)
// Network Sec – API Call  but will not be rendered
// On click msg will appear (either pop up or alert msg)