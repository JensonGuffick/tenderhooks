function offlinecheck() {
    const urlParams = new URLSearchParams(window.location.search);
    const override = urlParams.get('override');

    if (override === 'yes') {
        console.log("Offline redirect is temporarily disabled.");
        return;
    }
    if (override ===! 'yes') {
        console.log('No Offline Peram');
        fetch('/offline.txt')
            .then(response => response.text())
            .then(text => {
                if (text.toLowerCase().includes('yes')) {
                    window.location.href = 'https://offline.tenderhooks.uk';
                console.error('Error fetching the file:', error);
                }
            })
            .catch(error => {
                console.error('Error fetching the file:', error);
            });
        }
    }
offlinecheck();
