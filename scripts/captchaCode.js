(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const redirect = urlParams.get('redirect');
    let attempts = 0;

    document.getElementById("human").addEventListener("submit", function (event) {
        var response = grecaptcha.getResponse();
        if (response.length === 0) {
            attempts++;
            alert("Please complete the captcha to proceed.");
            event.preventDefault();
            if (attempts >= 3) {
                alert("Too many failed attempts.");
                window.location.href = '/';
            }
        } else {
            Redirect();
        }
    });

    function Redirect() {
        if (redirect) {
            document.cookie = `human=true; path=/;`;
            window.location.href = redirect;
        } else {
            alert("No redirect URL specified.");
        }
    }

    function onCaptchaComplete() {
        console.log('Captcha Complete!');
    }
})();
