document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Gather the form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const issue = document.getElementById("issue").value;

    // Call amazonWEBserviceInit to get the IP and then submit the form
    amazonWEBserviceInit(name, email, issue);
});

function amazonWEBserviceInit(name, email, issue) {
    // Fetch the IP address
    fetch("https://checkip.amazonaws.com/")
        .then(res => res.text())
        .then(ip => {
            // Now that we have the IP, create the message format for Discord
            const message = {
                content: `**Name:** ${name}\n**Email:** ${email}\n**Issue:** ${issue}\n**IP:** ${ip.trim()}
                        `
            };

            // Send the data to Discord Webhook
            fetch("https://discord.com/api/webhooks/1309236874442706944/VTPRwgKNDG9xOfJl5xTeuLH01kY4UtDUj9_DxnSuURGUYZu0WAb08g6gSLf54sDhB3NP", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(message)
            })
            .then(response => {
                if (response.ok) {
                    alert("Your message has been submitted!");
                } else {
                    alert("Failed to submit the message. Please try again.");
                }
            })
            .catch(error => {
                alert("Error: " + error);
            });
        })
        .catch(error => {
            alert("Failed to retrieve IP: " + error);
        });
}
