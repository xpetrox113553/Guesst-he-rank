const password = prompt("Admin Passwort");

if (password !== "Noxin99") {

    document.body.innerHTML =
        "<h1>❌ Kein Zugriff</h1>";

    throw new Error("Kein Zugriff");

}
let allClips = [];
let currentClip = 0;

let score = 0;
let total = 0;

async function loadClips() {

    const response =
        await fetch("/submissions");

    allClips =
        await response.json();

    currentClip = 0;

    showClip();

}
function showClip() {

    const clips =
        document.getElementById("clips");

    if (currentClip >= allClips.length) {

        clips.innerHTML =
            "<h2>🏆 Alle Clips gespielt!</h2>";

        return;
    }

    const item =
        allClips[currentClip];

    clips.innerHTML = `

        <video
            controls
            style="
                width:100%;
                max-height:700px;
                border-radius:15px;
            "
            src="${item.clip_url}">
        </video>

        <p>
            Spieler:
            ${item.riot_name}
        </p>

        <div class="ranks">

            <img class="rank-icon" src="/Iron_1_Rank.webp" onclick="guess('${item.rank}','Iron')">
            <img class="rank-icon" src="/Bronze_1_Rank.webp" onclick="guess('${item.rank}','Bronze')">
            <img class="rank-icon" src="/Silver_1_Rank.webp" onclick="guess('${item.rank}','Silver')">
            <img class="rank-icon" src="/Gold_1_Rank.webp" onclick="guess('${item.rank}','Gold')">
            <img class="rank-icon" src="/Platinum_1_Rank.webp" onclick="guess('${item.rank}','Platinum')">
            <img class="rank-icon" src="/Diamond_1_Rank.webp" onclick="guess('${item.rank}','Diamond')">
            <img class="rank-icon" src="/Ascendant_1_Rank.webp" onclick="guess('${item.rank}','Ascendant')">
            <img class="rank-icon" src="/Immortal_1_Rank.webp" onclick="guess('${item.rank}','Immortal')">
            <img class="rank-icon" src="/Radiant_Rank.webp" onclick="guess('${item.rank}','Radiant')">

        </div>

        <br>

        <button onclick="nextClip()">
            ➡️ Nächster Clip
        </button>

    `;

}
    const clips =
        document.getElementById("clips");

    clips.innerHTML =
        "Lade Clips...";

    const response =
        await fetch("/submissions");

    const data =
        await response.json();

    clips.innerHTML = "";

    data.forEach(item => {

        clips.innerHTML += `

            <div style="
                margin-top:20px;
                padding:15px;
                border:1px solid #444;
                border-radius:10px;
            ">

                <video
    controls
    style="
        width:100%;
        max-height:700px;
        border-radius:15px;
    "
    src="${item.clip_url}">
</video>
                <p>
                    Spieler:
                    ${item.riot_name}
                </p>

               <div class="ranks">

<div class="ranks">

<img class="rank-icon" src="/Iron_1_Rank.webp" onclick="guess('${item.rank}','Iron')">
<img class="rank-icon" src="/Bronze_1_Rank.webp" onclick="guess('${item.rank}','Bronze')">
<img class="rank-icon" src="/Silver_1_Rank.webp" onclick="guess('${item.rank}','Silver')">
<img class="rank-icon" src="/Gold_1_Rank.webp" onclick="guess('${item.rank}','Gold')">
<img class="rank-icon" src="/Platinum_1_Rank.webp" onclick="guess('${item.rank}','Platinum')">
<img class="rank-icon" src="/Diamond_1_Rank.webp" onclick="guess('${item.rank}','Diamond')">
<img class="rank-icon" src="/Ascendant_1_Rank.webp" onclick="guess('${item.rank}','Ascendant')">
<img class="rank-icon" src="/Immortal_1_Rank.webp" onclick="guess('${item.rank}','Immortal')">
<img class="rank-icon" src="/Radiant_Rank.webp" onclick="guess('${item.rank}','Radiant')">

</div>

                </button>

            </div>

        `;

    });

}
function guess(realRank, selectedRank) {
    realRank = realRank
    .replace("Diamant", "Diamond")
    .replace("Platin", "Platinum");

    const result =
        document.getElementById("result");

    console.log("realRank:", realRank);
    const img =
        rankImages[realRank];

    if (realRank === selectedRank) {

        result.innerHTML = `
            <h2>✅ RICHTIG!</h2>

            <img
                src="${img}"
                width="180">

            <p>${realRank}</p>
        `;

    } else {

        result.innerHTML = `
            <h2>❌ FALSCH!</h2>

            <p>
                Dein Tipp:
                ${selectedRank}
            </p>

            <img
                src="${img}"
                width="180">

            <p>
                Echter Rang:
                ${realRank}
            </p>
        `;

    }

}
const rankImages = {
    "Iron": "/Iron_1_Rank.webp",
    "Bronze": "/Bronze_1_Rank.webp",
    "Silver": "/Silver_1_Rank.webp",
    "Gold": "/Gold_1_Rank.webp",
    "Platinum": "/Platinum_1_Rank.webp",
    "Diamond": "/Diamond_1_Rank.webp",

    "Platin": "/Platinum_1_Rank.webp",
    "Diamant": "/Diamond_1_Rank.webp",

    "Ascendant": "/Ascendant_1_Rank.webp",
    "Immortal": "/Immortal_1_Rank.webp",
    "Radiant": "/Radiant_Rank.webp"
};
