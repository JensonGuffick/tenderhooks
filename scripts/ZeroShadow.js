let lastPressTime = 0;
let shadowDisabled = false;

// Disable Shadows before content is rendered
(function() {
    const cookies = document.cookie.split(';');
    let shadowsEnabled = true;  // Default to true

    for (let cookie of cookies) {
        const trimmedCookie = cookie.trim();
        if (trimmedCookie.startsWith('shadows=')) {
            const cookieValue = trimmedCookie.split('=')[1]; // Get the value of the shadows cookie
            if (cookieValue === 'false') {
                shadowsEnabled = false;
                break;
            }
        }
    }

    // Disable shadows immediately before page content renders
    if (!shadowsEnabled) {
        disableShadows();
    }
})();

document.addEventListener('keydown', function (event) {
    if (event.key.toLowerCase() === 's') {
        let currentTime = Date.now();

        if (currentTime - lastPressTime <= 500) {
            if (shadowDisabled) {
                enableShadows();
                document.cookie = `shadows=true; path=/`;
            } else {
                disableShadows();
                document.cookie = `shadows=false; path=/`;
            }
            shadowDisabled = !shadowDisabled; // Toggle the state
        }

        lastPressTime = currentTime;
    }
});

function disableShadows() {
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        element.style.boxShadow = 'none';
        element.style.textShadow = 'none';
    });
}

function enableShadows() {
    const allElements = document.querySelectorAll('*');
    allElements.forEach(element => {
        element.style.boxShadow = ''; // Reverts to the default shadow
        element.style.textShadow = '';
    });
}
