function generate() {
    let name = document.getElementById("name").value.trim();

    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    let styles = [
        "♡ " + name + " ♡",
        "♥︎ " + name + " ♥︎",
        "✦ " + name + " ✦",
        "☾ " + name + " ☽",
        "꧁ " + name + " ꧂",
        "༺ " + name + " ༻",
        "★彡 " + name + " 彡★",
        "✧･ﾟ:* " + name + " *:･ﾟ✧",
        "❥ " + name + " ❥",
        "☁︎ " + name + " ☁︎",
        "꒰♡꒱ " + name + " ꒰♡꒱",
        "☁️⋆ " + name + " ⋆☁️",
        "🦋 " + name + " 🦋",
        "✮⋆˙ " + name + " ˙⋆✮",
        "𓍢ִ໋🌷͙֒ " + name + " 🌷͙֒𓍢ִ໋",
        "ੈ♡˳ " + name + " ˳♡༄",
        "⋆౨ৎ˚⟡˖ " + name + " ˖⟡˚౨ৎ⋆",
        "☾𖤓 " + name + " 𖤓☽",
        "𐙚 " + name + " 𐙚",
        "✦•┈๑⋅⋯ " + name + " ⋯⋅๑┈•✦"
    ];

    let output = "";

    for (let style of styles) {
        output += `
        <div class="item">
            <span>${style}</span>
            <button onclick="copyText(\`${style}\`)">Copy</button>
        </div>`;
    }

    document.getElementById("result").innerHTML = output;
}

function copyText(text) {
    navigator.clipboard.writeText(text)
        .then(() => alert("Copied!"))
        .catch(() => alert("Copy failed!"));
}