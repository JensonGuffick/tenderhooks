function offlinecheck() {
    const urlParams = new URLSearchParams(window.location.search);
    const override = urlParams.get('override');

    if (override === 'yes') {
        console.log("Offline redirect is temporarily disabled by query parameter.");
        return;
    }

    fetch('https://tenderhooks.uk/dev/offline.txt')
        .then(response => response.text())
        .then(text => {
            if (text.toLowerCase().includes('yes')) {
                window.location.href = 'https://offline.tenderhooks.uk';
            }
        })
        .catch(error => {
            console.error('Error fetching the file:', error);
        });
}

offlinecheck();
