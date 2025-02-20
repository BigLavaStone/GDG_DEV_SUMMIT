let stayOnPage = false;

function setupBeforeUnload() {
    window.addEventListener('beforeunload', function (e) {
        // Display a confirmation dialog
        e.preventDefault();
        e.returnValue = ''; // This line is necessary for the confirmation dialog to be displayed

        // Log the message to the console
        console.log('Checkpoint code: K!1y$M');
        console.log("base64Encoding- U2VxdWVuY2UgLS0+IHJlZCwgYmx1ZSwgZ3JlZW4sIHllbGxvdw==");

        // Custom message for modern browsers (not displayed in the dialog)
        let confirmationMessage = 'Are you sure you want to leave this page?';

        // Set flag if the user stays on the page
        stayOnPage = true;

        // Return the message for legacy browsers
        return confirmationMessage;
    });
}

function triggerAlert() {
    if (stayOnPage) {
        alert('API URL: http://localhost:3000/llaso0ko/xU8oZp\nAPI Key: DVS1QHW\nFor the checkpoint code, check the console.');
        // Reset the flag after alert is shown
        stayOnPage = false;
    }
}

// Set up the beforeunload event after a user interaction
document.addEventListener('click', setupBeforeUnload, { once: true });
document.addEventListener('keydown', setupBeforeUnload, { once: true });

// Use the focus event to detect if the user stays on the page
window.addEventListener('focus', function () {
    triggerAlert();
});


document.addEventListener('click', function() {
    var div = document.createElement('div');
    div.id = 'k90jy';
    div.style.textAlign = 'center';
    div.style.marginTop = '20%';
    var h1 = document.createElement('h1');
    h1.style.fontSize = '3em';
    h1.textContent = '😂 Ha ha, you got fooled! Not your day, Nothing\'s here. 😜';
    div.appendChild(h1);
    document.body.appendChild(div);

    var div2 = document.getElementById('clickMessage');
    div2.innerHTML = '';
});
