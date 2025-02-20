localStorage.setItem("Data", "QuickSort");
localStorage.setItem("Hint", "Check your Network Tab");
document.cookie = "Data = Dijkstra; expires = Thu, 18 Dec 2025 12:00:00 UTC; path=/";

// Array to store counters for each clickable area
const counters = [];

// Array of messages for each clickable area
const messages = [
    ["Oops No Data Here !!", "Why are you here again?", "But Wait ……", "Maybe …", "Nah! no data here", "Ok wait I am giving, click me once more", "RadixSort"],
    ["Nothing to see here", "Still nothing", "Keep trying", "Almost there", "Just kidding, nothing here", "One more click", "BinarySearch"],
    ["Are you lost?", "Try again", "Not yet", "Keep going", "Almost there", "Just a bit more", "QuickSort"],
    ["Wrong spot", "Try another click", "Not quite", "Keep clicking", "Almost there", "Just one more", "MergeSort"],
    ["Nope, not here", "Try again", "Still nothing", "Keep clicking", "Almost there", "One last click", "BubbleSort"]
];

// Function to create a clickable area
function createClickableArea(id, index) {
    const area = document.createElement('div');
    area.id = id;
    area.style.position = 'absolute';
    area.style.width = '50px';
    area.style.height = '50px';
    area.style.borderRadius = '50%';
    area.style.cursor = 'grab';
    area.style.top = Math.random() * 90 + 'vh';
    area.style.left = Math.random() * 90 + 'vw';
    area.style.opacity = '0'; // Make it invisible

    // Initialize counter for this area
    counters[index] = 0;

    area.onclick = function() {
        const messageIndex = counters[index] % messages[index].length;
        alert(messages[index][messageIndex]);
        
        if (counters[index] === 0) {
            console.log("Maybe try again, click again");
        }
        counters[index]++;
    };

    document.getElementById('cabl-3nwy9w4cl').appendChild(area);
}

// Create 5 clickable areas
for (let i = 1; i <= 5; i++) {
    createClickableArea('cabl-3nwy9w4cl-' + Math.random().toString(36).substr(2, 9), i - 1);
}

// Function to fetch API data
async function fetchData() {
    try {
        const response = await fetch('https://mock1289.free.beeceptor.com/api/dummy-data', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log('API call successful:', data);
    } catch (error) {
        console.error('Error making API call:', error);
    }
}

// Fetch data on page load
document.addEventListener('DOMContentLoaded', fetchData);

// Add event listener for the hidden button
document.querySelector('.hidden-button').addEventListener('click', () => {
    alert("Keyword is behind the Button try to find if you can.");
});

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

// Cookies
// Local Storage
// Input Tag– hidden
// CSS Hiding → (bg color, text size) -- 2
// Network Sec – API Call  but will not be rendered -- 1
// On click msg will appear (either pop up or alert msg) -- 5