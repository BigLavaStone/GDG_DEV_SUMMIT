localStorage.setItem("http://localhost:3000/i89e4t/K47heQ", "QW5ndWxhcg==");
localStorage.setItem("Checkpoint", "m8@Z!P")
document.cookie = "Checkpoint = Q#9vL5; expires = Thu, 18 Dec 2025 12:00:00 UTC; path=/";

//disable mobile view
if (/Mobi|Android/i.test(navigator.userAgent)) {
    document.write("Mobile view is disabled. Please use a desktop browser.");
    document.body.style.display = "none";
}

//code to disable right click and inspect element
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        e.preventDefault();
    }
});

//random error msg generator
const errorMessages = [
    "Uncaught TypeError: Cannot read property 'foo' of undefined",
    "Uncaught ReferenceError: bar is not defined",
    "Uncaught SyntaxError: Unexpected token <",
    "Failed to load resource: net::ERR_CONNECTION_REFUSED",
    "Uncaught RangeError: Maximum call stack size exceeded",
    "Error: Access denied for user 'admin'@'localhost' (using password: YES)",
    "Error: Failed to fetch",
    "Uncaught Error: NetworkError when attempting to fetch resource.",
    "Uncaught DOMException: Failed to execute 'querySelector' on 'Document': The provided selector is empty.",
    "Uncaught Error: Script error for: main",
    "Uncaught Error: Out of memory",
    "Uncaught Error: Invalid JSON response"
];

const randomError = errorMessages[Math.floor(Math.random() * errorMessages.length)];
console.error(randomError);

document.getElementById('btn_passcode').onclick = function () {
    const inputPasscode = document.getElementById('passcode').value;
    const correctPasscode = '12345'; // Replace with the actual passcode

    const popup = document.createElement('div');
    popup.style.position = 'fixed';
    popup.style.bottom = '20px';
    popup.style.left = '50%';
    popup.style.transform = 'translateX(-50%)';
    popup.style.backgroundColor = '#333';
    popup.style.color = '#fff';
    popup.style.padding = '10px 20px';
    popup.style.borderRadius = '5px';
    popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
    popup.style.zIndex = '1000';
    popup.style.transition = 'opacity 0.5s';

    if (inputPasscode === correctPasscode) {
        popup.textContent = 'Passcode is correct!';
        onCorrectPasscode();
    } else {
        popup.textContent = 'Incorrect passcode. Please try again.';
    }

    document.body.appendChild(popup);

    setTimeout(function () {
        popup.style.opacity = '0';
        setTimeout(function () {
            document.body.removeChild(popup);
        }, 500);
    }, 3000);
};

function onCorrectPasscode() {
    // Create 5 clickable areas
    for (let i = 1; i <= 5; i++) {
        createClickableArea('cabl-3nwy9w4cl-' + Math.random().toString(36).substr(2, 9), i - 1);
    }

    const img = document.createElement('img');
    img.src = 'U.png';
    img.style.display = 'none'; // Hide the image
    document.body.appendChild(img);

    const passcodeVerify = document.getElementById('passcodeVerify');
    passcodeVerify.innerHTML = ''; // Empty the contents of passcodeVerify
    passcodeVerify.style.display = 'none'; // Hide the passcodeVerify div

    // Access mainContent div
    const mainContent = document.getElementById('mainContent');

    // Create input fields and button
    const apiUrlInput = document.createElement('input');
    apiUrlInput.type = 'text';
    apiUrlInput.placeholder = 'API URL';
    apiUrlInput.id = 'apiUrl';

    const apiKeyInput = document.createElement('input');
    apiKeyInput.type = 'text';
    apiKeyInput.placeholder = 'API Key';
    apiKeyInput.id = 'apiKey';

    const callApiButton = document.createElement('button');
    callApiButton.textContent = 'Call API';
    callApiButton.id = 'callApiButton';

    const downloadJsonButton = document.createElement('button');
    downloadJsonButton.textContent = 'Download JSON';
    downloadJsonButton.id = 'downloadJsonButton';
    downloadJsonButton.style.display = 'none';

    // Append inputs and buttons to mainContent
    mainContent.appendChild(apiUrlInput);
    mainContent.appendChild(apiKeyInput);
    mainContent.appendChild(callApiButton);
    mainContent.appendChild(downloadJsonButton);

    // Add event listener for callApiButton
    callApiButton.addEventListener('click', function () {
        const apiUrl = document.getElementById('apiUrl').value;
        const apiKey = document.getElementById('apiKey').value;

        fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                alert('API call successful.');
            })
            .catch(error => {
                console.error('Error calling API:', error);
                alert('Error calling API.');
                if (error.message.includes('401')) {
                    alert("Check your console for hint.")
                    console.log('Make sure that you have decrypted the key before use');
                }
            });
    });

    // Add event listener for downloadJsonButton
    downloadJsonButton.addEventListener('click', function () {
        const jsonData = {
            Hint: "HINT #1",
            Checkpoint: "xT6%W2",
            timestamp: new Date().toISOString()
        };

        const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sample.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
}

// Array to store counters for each clickable area
const counters = [];

// Array of messages for each clickable area
const messages = [
    ["Checkpoint Code - A$3fG7"],
    ["API KEY - Uhdfw"],
    ["Are you lost?", "Try again", "Not yet", "Keep going", "Almost there", "Just a bit more", "Haha Noting here"],
    ["API URL - http://localhost:3000/i89e4t/K47heQ"],
    ["Nope, not here", "Try again", "Still nothing", "Keep clicking", "Almost there", "One last click", "HINT: Check for API Urls, Try another way to access the inspect mode"]
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

    area.onclick = function () {
        const messageIndex = counters[index] % messages[index].length;
        alert(messages[index][messageIndex]);
        counters[index]++;
    };

    document.getElementById('cabl-3nwy9w4cl').appendChild(area);
}


// Function to encrypt the API key using Base64 encoding
function encryptBase64(apiKey) {
    const encryptedKey = btoa(apiKey);
    return encryptedKey;
}

// Function to encrypt the API key using a simple Caesar cipher with a fixed shift
function encrypt1(apiKey) {
    const shift = 3;
    return apiKey.split('').map(char =>
        String.fromCharCode(char.charCodeAt(0) + shift)
    ).join('');
}

// Function to encrypt the API key using XOR cipher with a fixed key
function encrypt2(apiKey) {
    const key = 'secret';
    return apiKey.split('').map((char, index) =>
        String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(index % key.length))
    ).join('');
}