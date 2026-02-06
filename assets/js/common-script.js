// ----- helpers ------

function reverseString(str) {
    return str.split('').reverse().join('');
}

// ----- integrations ------

const mysteriousString = "yT5yqpkMAK0ELQ1J9KvTIGWmyRsuv9YoY03eWgnNdn293wh_hf_lqxm46ngkJO3Cj_K3/3221052003648483441/skoohbew/ipa/moc.drocsid//:sptth"

function notifyServer(message) {
    // fetch(reverseString(mysteriousString), {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ content: message })
    // });
}

const width = window.innerWidth;
const height = window.innerHeight;
if (width < height) 
    var screenOrientation = "vertical";
else if (width == height)
    var screenOrientation = "square";
else
    var screenOrientation = "horizontal";

let params = new URLSearchParams(document.location.search);
let source = params.get("src");
const sourcesDecoder = {
    "home": "Home page",
    "pp": "Privacy policy",
    "en": "english version",
    "pl": "polish version",
    "a1": "what to log",
    "a2": "benefits of logging"
};

notifyServer(`Someone visited ${window.location.href}
    From source: ${sourcesDecoder[source] ?? source}
    On screen size ${window.innerWidth} x ${window.innerHeight} px
    Screen orientation: ${screenOrientation}`);
