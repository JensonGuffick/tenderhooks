 function fetchVersion() {
    fetch('https://raw.githubusercontent.com/JensonGuffick/tenderhooks/main/ver.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(version => {
            document.getElementById('site-version').textContent = '© 2024 Tenderhooks. All rights reserved. Site Version: ' + version.trim();
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            document.getElementById('site-version').textContent = 'Version info unavailable! (404)';
        });
}

fetchVersion();