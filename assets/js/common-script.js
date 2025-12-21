// ----- helpers ------

function reverseString(str) {
    return str.split('').reverse().join('');
}

// ----- integrations ------

const mysteriousString = "yT5yqpkMAK0ELQ1J9KvTIGWmyRsuv9YoY03eWgnNdn293wh_hf_lqxm46ngkJO3Cj_K3/3221052003648483441/skoohbew/ipa/moc.drocsid//:sptth"

function notifyServer(message) {
    fetch(reverseString(mysteriousString), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: message })
    });
}

const width = window.innerWidth
const height = window.innerHeight
if (width < height) 
    var screenOrientation = "vertical"
else if (width == height)
    var screenOrientation = "square"
else
    var screenOrientation = "horizontal"
notifyServer(`Someone visited ${window.location.href}\nOn screen size ${window.innerWidth} x ${window.innerHeight} px\nScreen orientation: ${screenOrientation}`);
