(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect');
    console.log('Got redirect: ', redirect);

    function checkForCaptcha() {
        const cookies = document.cookie.split(';');
        console.log('Collecting Cookies');
        let isHuman = false;

        for (let cookie of cookies) {
            const trimmedCookie = cookie.trim();
            if (trimmedCookie.startsWith('human=')) {
                const humanValue = trimmedCookie.split('=')[1];
                if (humanValue === 'true') {
                    isHuman = true;
                    break;
                }
            }
        }

        if (isHuman) {
            window.location.href = redirect;
        }
    }

    checkForCaptcha();
})();
