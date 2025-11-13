// ----- integrations ------

function notifyDiscord(message) {
    fetch("https://discord.com/api/webhooks/1438516776118915105/4V3Zr0JWg9PLvgtEXAEL4NT9a5bQOBk0fh5YooBj9V0jWXYJV8DY14aJoTl8EhnAmtF0", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: message })
    });
}

notifyDiscord(`Someone visited ${window.location.href}`);